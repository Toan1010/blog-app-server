import { PostModel } from "../models/PostModel.js";

export const getAllPost = async (req, res, next) => {
  try {
    const post = await PostModel.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createPost = async (req, res, next) => {
  try {
    const newPost = req.body;
    const post = new PostModel(newPost);
    await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const updatePost = req.body;
    const post = await PostModel.findOneAndUpdate(
      { _id: updatePost._id },
      updatePost,
      { new: true }
    );
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
