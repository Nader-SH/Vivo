import { Router } from "express";
import { signUp, signIn } from "../controllers/user/index.js";
import { auth } from "../middlewares/index.js";

const userRouter = Router();

userRouter.post("/signup", signUp);
userRouter.post("/signin", signIn);

export default userRouter;
