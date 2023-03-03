import { Router } from "express";

import userRouter from "./user.js";
import postRouter from "./post.js";
import storysRouter from "./storys.js";
import chatRouter from './chat.js';
import friendsRouter from "./addFriends.js";
const router = Router();

router.use("/", userRouter);
router.use("/", postRouter);
router.use("/", storysRouter);
router.use("/",chatRouter);
router.use("/",friendsRouter);

export default router;
