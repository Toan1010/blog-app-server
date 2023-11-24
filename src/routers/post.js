import express from "express";
import { getAllPost, createPost, updatePost } from "../controllers/post.js";

const post = express.Router();

post.get("/", getAllPost);

post.post("/", createPost);

post.patch("/update", updatePost);

export default post;
