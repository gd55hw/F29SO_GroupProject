import express from "express";
import PostsController from "./posts.controller.js";

const router = express.Router();

// Routes for posts
router.route("/")
  .get(PostsController.getPosts)
  .post(PostsController.addPost)
  .delete(PostsController.deletePost);

export default router;
