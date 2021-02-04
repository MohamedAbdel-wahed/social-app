import express from 'express'
import {getPosts,createPost,editPost,removePost} from '../controllers/post.js'

const router=  express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', editPost)
router.delete('/:id', removePost)


export default router
