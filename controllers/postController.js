import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  const post = await Post.create({ ...req.body, author: req.user._id });
  res.status(201).json(post);
};

export const getPosts = async (req, res) => {
  const posts = await Post.find().populate("author", "name");
  res.json(posts);
};

export const updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
};

export const deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted" });
};
