import mongoose from 'mongoose'

import Post from '../models/post.js'


export const getPosts= async(req,res)=> {
  try {
    const posts= await Post.find().sort({createdAt: -1})
    res.status(200).json(posts)
  } 
  catch (error) {
    res.status(4).json({error: error.message})
  }
}

export const createPost= async(req,res)=> {
  try {
    const newPost= await Post.create(req.body)
    res.status(201).json(newPost)
  } 
  catch (error) {
    res.status(400).json({error: error.message})
  }
}

export const editPost= async(req,res)=> {
  try {
    const id= req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)) 
       return res.status(404).send('No Post Found')

    const updatedPost= await Post.findByIdAndUpdate(id, req.body, {new: true})
    res.status(201).json(updatedPost)
  } 
  catch (error) {
    res.status(400).json({error: error.message})
  }
}

export const removePost= async(req,res)=> {
  try {
    const id= req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)) 
       return res.status(404).send('No Post Found')

    await Post.findByIdAndRemove(id)
    res.status(201).send('Post deleted successfully!')
  } 
  catch (error) {
    res.status(400).json({error: error.message})
  }
}