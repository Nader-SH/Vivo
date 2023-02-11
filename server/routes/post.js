import { Router } from "express";
import { addPosts, getPosts ,addComment ,addCommentReply } from "../controllers/post/index.js";
import { auth } from "../middlewares/index.js";

const postRouter = Router();

postRouter.post("/addposts", auth, addPosts);
postRouter.get("/getposts", auth,getPosts);
postRouter.post("/addcomment",auth,addComment);
postRouter.post("/addcommentreply",auth,addCommentReply);

export default postRouter;
