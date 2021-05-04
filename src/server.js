import express from "express";

const PORT = 4000;

const app = express();

const handleHome=(req,res,next)=>{
return res.send("<h1>I Love middlewares</h1>");
}
//request(req) Objsect, response(res) Objecnt

const logger=(req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
next();
}



//app use는 global middleware 를 만들수 있게 해준다.
app.get("/",logger,handleHome );


const handleListening=()=>console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT,handleListening);



