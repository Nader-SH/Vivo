import { Router } from "express";
import { signUp, signIn, userData } from "../controllers/user/index.js";
import { auth } from "../middlewares/index.js";
const userRouter = Router();

userRouter.post("/signup", signUp);
userRouter.post("/signin", signIn);
userRouter.get("/userdata",auth, userData);

export default userRouter;
