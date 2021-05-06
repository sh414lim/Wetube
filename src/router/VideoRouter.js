import express from "express";
import {see,edit,remove,upload} from "../controllers/videoControllers";

const videoRouter=express.Router();


videoRouter.get("/upload",upload)
videoRouter.get("/:id",see);
videoRouter.get("/:id/edit",edit);
videoRouter.get("/:id/remove",remove);

export default videoRouter;