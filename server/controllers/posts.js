import mongoose from "mongoose";
import Post from "../models/posts.js";
import User from "../models/users.js";
import jwt from "jsonwebtoken";

export async function getPosts(req, res) {
  try {
    const posts = await Post.find().populate("author");
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

export async function verifyToken(req, res) {
  const token = req.headers.authorization || req.body.token
  console.log(token)
  const data = jwt.verify(token, 'secret')
  console.log(data)
  if (!data) {
    return res.status(401).json({ message: 'Unauthorized' })
  } else {


    res.status(200).json(data.user)
    
  }
}


export async function createPost(req, res) {
  console.log(req.body)
  const token = req.headers.authorization
  console.log (token)
  const data = jwt.verify(token, 'secret')
  console.log(data)
  const { _id } = data.user
  console.log(_id)
  if (!data) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
 
  const user = await User.findOne({ _id })
  console.log(user)
  const newPost = new Post({
    // @ts-ignore
    author: _id,
    date: new Date(),
    text: req.body.twut,

  });
  try {
    user.posts.push(newPost._id)
    await user.save()
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
