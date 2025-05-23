//require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})


connectDB()

.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed !!", err)
})



/*
import express from "express"
const app = express()
//way to connect DB
// function connectDB(){}

// connectDV()

//Another way 

(async() => {
    try{
        await mongoose.connect(`${process.env.MONGODM_URL}/${
            DB_NAME
         }`)
         app.om("error", (erroe)=> {
            console.log("ERROR", error);
            throw error
         })


         app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
         })





    } catch(error){
        console.error("ERROR", error)
        throw error
    }
})()*/