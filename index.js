
import express from "express";
const app=express();


const PORT=4000;

const handleListening=()=>{
console.log(`Listening on: http://localhost:${PORT}`)
}


app.get('/profile',handleProfile)

app.listen(PORT,handleListening)