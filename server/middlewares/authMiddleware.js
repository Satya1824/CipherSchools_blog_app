import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send({
        success: false,
        message: "Token not found!",
      });
    }

    const decode = JWT.verify(token, process.env.SECRET);

    const user = await userModel.findById(decode._id).select("-password");

    if (!user) {
      return res.status(401).send({
        success: false,
        message: "User not found!",
      });
    }

    // user._id = user._id.toString();

    req.user = {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
    };
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Token verification failed!",
      error,
    });
  }
};
