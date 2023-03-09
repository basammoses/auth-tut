import express from "express";
// @ts-ignore

import {
  getPosts, getPostbyId, createPost, updatePostById, deletePostById
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostbyId);
router.post("/create", createPost);
router.patch("/:id/update", updatePostById);
router.delete("/:id/delete", deletePostById);




export default router;
