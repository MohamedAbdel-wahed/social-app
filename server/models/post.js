import mongoose from "mongoose"

const postSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    likes: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
)

const Post = mongoose.model("post", postSchema)

export default Post
