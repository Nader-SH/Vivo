import { Router } from "express";
import { auth } from "../middlewares/index.js";
import {
  getStorys,
  addStorysImage,
  deleteStorys,
} from "../controllers/storys/index.js";
import multer from "multer";
const upload = multer({ dest: "uploadsStory/" });
const storysRouter = Router();

storysRouter.get("/getstorys", auth, getStorys);
storysRouter.post(
  "/addstorysimage",
  auth,
  upload.single("image"),
  addStorysImage
);
storysRouter.delete("/deletestorys", auth, deleteStorys);
export default storysRouter;
