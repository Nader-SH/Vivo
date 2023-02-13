import { Router } from "express";

import userRouter from "./user.js";
import postRouter from "./post.js";
import storysRouter from "./storys.js";

const router = Router();

router.use("/", userRouter);
router.use("/", postRouter);
router.use("/", storysRouter);
export default router;
