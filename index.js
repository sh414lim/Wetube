
import express from "express";
const app=express();


const PORT=4000;

const handleListening=()=>{
console.log(`Listening on: http://localhost:${PORT}`)
}

function handleHome(req,res){
    console.log(req);
    res.send('Hello from home');
}

  const handleProfile=(req,res)=>{
console.log(req);
res.send("This is my Profile");
}

app.get("/profile",handleProfile);

app.get("/", handleHome)

app.listen(PORT,handleListening)