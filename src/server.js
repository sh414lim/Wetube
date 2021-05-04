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

const privateMiddleware=(req,res,next)=>{
    const url=req.url;
    if(url==="/protected"){
        return res.send("<h1>NOT ALLOWED</h1>")
    }else{
        console.log("Allowed, you may continue.")
        next();
    }
}

const handleLogin=(req,res)=>{
    return res.send({message:"Please login"});
}

const hadleProtected=(req,res)=>{
return res.send("Welcome to Private lounge")
}


app.use(logger);
app.use(privateMiddleware);
//app use는 global middleware 를 만들수 있게 해준다.
app.get("/",handleHome );
app.get("/login",handleLogin);
app.get("/protected",hadleProtected)
//express 가 할일 
//handleHome({...},{...})

const handleListening=()=>console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT,handleListening);



