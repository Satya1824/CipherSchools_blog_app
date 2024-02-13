const userModel = require("../models/User.model");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const bcrypt = require("bcrypt");

function createToken(id) {
  return jwt.sign({ _id: id }, process.env.SECRET);
}

async function signupUser(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "All fields are required!",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(401).send({
        success: false,
        message: "Invalid email address!",
      });
    }

    if (password.length < 8) {
      return res.status(402).send({
        success: false,
        message: "Password should be atleast 8 char long!",
      });
    }

    const found = await userModel.findOne({ email });
    if (found) {
      return res.status(403).send({
        success: false,
        message: "Email already in use!",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).send({
      success: true,
      message: "Account created! Please login!",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
}
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "All fields are required!",
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).send({
        success: false,
        message: "Account not found!",
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(402).send({
        success: false,
        message: "Incorrect password!",
      });
    }

    const token = createToken(user._id);
    res.status(200).send({
      success: true,
      message: "Logged in successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
}
module.exports = {
  signupUser,
  loginUser,
};
