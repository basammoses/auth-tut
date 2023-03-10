import express from "express";
// @ts-ignore

import {
  getPosts, getPostbyId, createPost, updatePostById, deletePostById
} from "../controllers/posts.js";

import verifyAuth from "../middleware/verifyAuth.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostbyId);
router.post("/create", verifyAuth,createPost);
router.patch("/:id/update", updatePostById);
router.delete("/:id/delete", deletePostById);




export default router;
