import mongoose from "mongoose"

import Post from "../models/post.js"

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 })

    res.status(200).json(posts)
  } catch (error) {
    res.status(4).json({ error: error.message })
  }
}

export const createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body)

    res.status(201).json(newPost)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const editPost = async (req, res) => {
  try {
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No Post Found")

    const updatedPost = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
    })

    res.status(201).json(updatedPost)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const removePost = async (req, res) => {
  try {
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No Post Found")

    await Post.findByIdAndRemove(id)
    res.status(201).send("Post deleted successfully!")
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const likePost = async (req, res) => {
  try {
    if (!req.userId)
      return res
        .status(401)
        .json({ message: "user is not authorized to do this action" })

    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(404).send("No Post Found")

    const post = await Post.findById(req.params.id)

    const likeIndex = post.likes.findIndex((id) => id === String(req.userId))

    if (likeIndex === -1) {
      // like post
      post.likes.push(req.userId)
    } else {
      // delete like
      post.likes = post.likes.filter((id) => id !== String(req.userId))
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, post, {
      new: true,
    })

    res.status(201).json(updatedPost)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
