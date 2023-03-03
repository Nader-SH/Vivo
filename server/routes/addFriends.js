import { addFriends } from "../controllers/addFriends/index.js";
import { auth } from "../middlewares/index.js";
import { Router } from "express";

const friendsRouter = Router();
friendsRouter.post("/addfriend", auth, addFriends);


export default friendsRouter;
