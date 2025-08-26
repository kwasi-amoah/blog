import express from "express";
import { auth } from "../middleware/auth.js";
import { addComment, getComments } from "../controllers/commentController.js";

const router = express.Router();
router.get("/", getComments);
router.post("/", auth, addComment);

export default router;
