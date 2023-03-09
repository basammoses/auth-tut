import mongoose from "mongoose";
import Post from "../models/posts.js";
import User from "../models/users.js";

export async function getPosts(req, res) {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}


export async function getPostbyId(req, res) {
  const { id } = req.params;
  try {
    const post = await Post.findById(id).populate("author");
    res.status(200).json(post);
  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}


export async function createPost(req, res) {
  const post = req.body;
  const newPost = new Post(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  }
  catch (err) {
    res.status(409).json({ message: err.message });
  }
}

export async function deletePostById(req, res) {
  const { id } = req.params;
  try {
    await Post.findByIdAndRemove(id);
    res.status(200).json({ message: "Post deleted successfully" });
  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export async function updatePostById(req, res) {
  const { id } = req.params;
  const post = req.body;
  try {
    await Post.findByIdAndUpdate({ id }, post);
    res.status(200).json({ message: "Post updated successfully" });
  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}
