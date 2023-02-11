import { Router } from "express";

import userRouter from './user.js';
import postRouter from './post.js';
const router = Router();

router.use("/",userRouter)
router.use("/",postRouter)
export default router;
