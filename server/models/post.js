import mongoose from 'mongoose'



const postSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    image: {
      type: String,
    },
    tags: {
      type: [String],
    },
    likes: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
)

const Post= mongoose.model('post', postSchema)


export default Post