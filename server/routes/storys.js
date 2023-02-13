import { Router } from "express";
import { auth } from "../middlewares/index.js";
import { getStorys } from "../controllers/storys/index.js";
const storysRouter = Router();

storysRouter.get("/getstorys", auth, getStorys);

export default storysRouter;
