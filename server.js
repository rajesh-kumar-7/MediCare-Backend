import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/database.js"
import userRouter from './routes/authRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import DocRouter from "./routes/DocRoutes.js"
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express()
dotenv.config()
app.use(cookieParser())
connectDB()
app.use(express.json())//so backedn can know data from frontend
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true}))//used to send token

app.use('/api/user',userRouter)
app.use('/api/admin',adminRoutes)
app.use('/api/Doctor',DocRouter)

app.listen(5000,()=>{
    console.log("port running")
})