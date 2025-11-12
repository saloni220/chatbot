import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import chatBotRutes from './routes/chatbot.route.js'
const app=express()
dotenv.config();
//database connection code 
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("database connectes successfully")
}).catch((err)=>{
    console.log(`Database connection failed ${err}`)
})
//middleware
app.use(express.json())
//defining route
app.use("/bot/v1/",chatBotRutes)

const port=process.env.PORT||3500;
app.get('/',(req,res)=>{
    res.send(`hello world`)
})
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})