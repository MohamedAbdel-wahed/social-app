import express from "express"

import {
  getPosts,
  createPost,
  editPost,
  removePost,
  likePost,
} from "../controllers/post.js"

import authMiddleware from "../middleware/auth.js"

const router = express.Router()

router.get("/", getPosts)
router.post("/", authMiddleware, createPost)
router.patch("/:id", authMiddleware, editPost)
router.delete("/:id", authMiddleware, removePost)
router.patch("/:id/like", authMiddleware, likePost)

export default router
