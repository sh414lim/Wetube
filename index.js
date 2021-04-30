
import express from "express";
const app=express();


const PORT=4000;

const handleListening=()=>{
console.log(`Listening on: http://localhost:${PORT}`)
}

const  handleHome=(req,res)=>{
    console.log(req)
    res.send('Hello from House')
}

const handleProfile=(req,res)=>{
res.send("You are on y profile")
}

app.get("/",handleHome);

app.get('/profile',handleProfile)

app.listen(PORT,handleListening)