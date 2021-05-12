import express from "express";
import {see,edit,remove,upload} from "../controllers/videoControllers";

const videoRouter=express.Router();


videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id/remove",remove);
videoRouter.get("/upload",upload);

export default videoRouter;