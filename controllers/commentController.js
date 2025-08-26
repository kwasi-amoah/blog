import Comment from "../models/Comment.js";

export const addComment = async (req, res) => {
  const comment = await Comment.create({ ...req.body, author: req.user._id });
  res.status(201).json(comment);
};

export const getComments = async (req, res) => {
  const comments = await Comment.find({ post: req.query.postId }).populate("author", "name");
  res.json(comments);
};
