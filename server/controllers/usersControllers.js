import JWT from "jsonwebtoken";
import validator from "validator";
import bcrypt from "bcrypt";
import userSchema from "../models/userModel.js";

function createToken(id) {
  return JWT.sign({ _id: id }, process.env.SECRET);
}

export const signupUser = async (req, res) => {
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

    const found = await userSchema.findOne({ email });
    if (found) {
      return res.status(403).send({
        success: false,
        message: "Email already in use!",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new userSchema({
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
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "All fields are required!",
      });
    }

    const user = await userSchema.findOne({ email });
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
};

export const getUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await userSchema.findOne({ _id: userId }).select("-password");
    if (!user) {
      return res.status(401).send({
        success: false,
        message: "No such user exists!",
      });
    }

    res.status(200).send({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
