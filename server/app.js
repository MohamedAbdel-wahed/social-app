import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import postRoutes from './routes/post.js' 


const app= express()

app.use(cors())
app.use(express.json({limit: '30mb', extended: true}))
app.use(express.urlencoded({limit: '30mb', extended: true}))
dotenv.config()

const port= process.env.PORT || 4000
const mongo_url= process.env.MONGO_URL

mongoose.connect(mongo_url, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=> app.listen(port, ()=> console.log(`App is running on: ${port}`)))
        .catch(err=> console.log(err))

mongoose.set('useFindAndModify', false)




app.use('/api/posts',postRoutes)










