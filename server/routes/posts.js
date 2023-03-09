import express from "express";
// @ts-ignore
import * as postController from "../controllers/posts.js";

const router = express.Router();

router.get("/", postController.getPosts);

export default router;
