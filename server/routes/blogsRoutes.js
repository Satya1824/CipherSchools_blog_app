import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getSingleBlog,
  getUserBlogs,
  updateBlog,
} from "../controllers/blogsControllers.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.post("/", requireSignIn, createBlog);
router.get("/user-blogs/:id", getUserBlogs);
router.get("/:id", getSingleBlog);
router.patch("/:id", requireSignIn, updateBlog);
router.delete("/:id", requireSignIn, deleteBlog);

export default router;
