import { Router } from "express";
import {
  addPosts,
  getPosts,
  addComment,
  addCommentReply,
  addPostsImage,
} from "../controllers/post/index.js";
import { auth } from "../middlewares/index.js";
import multer from "multer";
const upload = multer({ dest: 'uploads/' });

const postRouter = Router();

postRouter.post("/addposts", auth, addPosts);
postRouter.post("/addpostsimage", auth, upload.single('image'), addPostsImage);
postRouter.get("/getposts", auth, getPosts);
postRouter.post("/addcomment", auth, addComment);
postRouter.post("/addcommentreply", auth, addCommentReply);

export default postRouter;
