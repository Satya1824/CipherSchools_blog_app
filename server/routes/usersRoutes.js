import express from "express";
import {
  getUser,
  loginUser,
  signupUser,
} from "../controllers/usersControllers.js";
const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/:id", getUser);

export default router;
