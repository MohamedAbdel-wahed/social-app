import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import userRoutes from "./routes/user.js"
import postRoutes from "./routes/post.js"

const app = express()

app.use(cors())
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
dotenv.config()

const port = process.env.PORT || 4000

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => app.listen(port, () => console.log(`App is running on: ${port}`)))
  .catch((err) => console.log(err))

mongoose.set("useFindAndModify", false)

app.use("/api/auth", userRoutes)
app.use("/api/posts", postRoutes)
