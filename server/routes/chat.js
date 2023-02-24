import { auth } from "../middlewares/index.js";
import { Router } from "express";
import {
  createMessageController,
  getMessagesByReceiverIdController,
  getUserFollow,
} from "../controllers/chat/index.js";

const chatRouter = Router();
chatRouter.post("/messages/:receiverId", auth, createMessageController);
chatRouter.get(
  "/messagesreceiver/:receiverId",
  auth,
  getMessagesByReceiverIdController
);
chatRouter.get("/userfollow", auth, getUserFollow);

export default chatRouter;
