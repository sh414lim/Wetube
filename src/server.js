import express from "express";
import morgan from"morgan";

const PORT = 4000;

const app = express();

const morganMiddleware=morgan("tiny")

    const handleHome=(req,res)=>{
        console.log("Hello!!!")
        return res.send("<h1>I Love middlewares</h1>");
        }

        const handleLogin=(req,res)=>{
            console.log("Login");
            return res.send("This is Login Pags")

        }
    
app.use(morganMiddleware);
app.get("/",handleHome );
app.get("/login",handleLogin)


const handleListening=()=>console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT,handleListening);



