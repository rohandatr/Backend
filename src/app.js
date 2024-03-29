import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({              //app.use is for configuration || middleware
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//request handling on website
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import 
import userRouter from "./routes/user.routes.js"

//routes 

app.use("/api/v1/users",userRouter)

export { app }