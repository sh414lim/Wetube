import express from "express";
import morgan from"morgan";
import globalRouter from "./router/GlobalRouter";
import videoRouter from "./router/VideoRouter";
import userRouter from "./router/UserRouter";

const PORT = 4000;

const app = express();
const morganMiddleware=morgan("dev")

app.set("view engine","pug");
app.set("views",process.cwd()+"/src/views");
app.use(morganMiddleware);
app.use("/",globalRouter);
app.use("/videos",videoRouter);
app.use("/users",userRouter);

   

const handleListening=()=>console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT,handleListening);



