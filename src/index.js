import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})



connectDB()




/*

import express from "express"

;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }catch(error){
        console.log("ERROR:", error)
        throw err
    })
    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
    })
} catch (error){
    console.log("Error: ", error)
    throw err
}
}) ()
*/