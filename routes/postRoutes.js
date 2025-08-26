import express from "express";
import { auth } from "../middleware/auth.js";
import { createPost, getPosts, updatePost, deletePost } from "../controllers/postController.js";

const router = express.Router();
router.get("/", getPosts);
router.post("/", auth, createPost);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

export default router;
