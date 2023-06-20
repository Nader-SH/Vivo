import express from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import { join } from "path";
import router from "./routes/index.js";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { Socket } from "dgram";
import { createMessageQuery } from "./queries/chat/index.js";

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


dotenv.config();
const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const { NODE_ENV } = process.env;

app.set("port", process.env.PORT || 8080);

app.use([
  compression(),
  cookieParser(),
  express.urlencoded({ extended: false }),
  express.json(),
  cors({
    origin: "*",
  }),
]);

app.use("/api/v1", router);

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}


let arrayOnlineUsers = [];
const addUserOnline = (id, socketId) => {
  const data = removeUserOnline(parseInt(id));
  console.log(data, "remove");
  !arrayOnlineUsers.some((id) => id.id === id) &&
    arrayOnlineUsers.push({ id: id, socketId: socketId });
  // console.log(arrayOnlineUsers , "the array");
};
const removeUserOnline = (id) => {
  arrayOnlineUsers = arrayOnlineUsers.filter((socketId) => id !== socketId);
};
const findUsers = (receiverId) => {
  console.log(parseInt(receiverId), "infinc");
  console.log(arrayOnlineUsers, "[the arr]");
  return arrayOnlineUsers.find((data) => data.id === parseInt(receiverId));
};

io.on("connection", (socket) => {
  console.log("connection", socket.id);
  socket.on("newUser", (data) => {
    addUserOnline(data, socket.id);
  });
  socket.on("send_message", async (data) => {
    console.log(data, socket.id, "data");
    const { message, receiverId, id } = data;
    const receiverUser = findUsers(receiverId);
    if (receiverUser !== undefined) {
      io.to(receiverUser.socketId).emit("message", data);
      await createMessageQuery(id, receiverId, message);
    } else {
      await createMessageQuery(id, receiverId, message);
    }
  });
  socket.on("typing", (isTyping) => {
    const { receiverId } = isTyping;
    const receiverUser = findUsers(receiverId);
    console.log(receiverUser);
    if (receiverUser === undefined) {
      console.log("user offline");
    } else {
      socket.broadcast.to(receiverUser.socketId).emit("typing", isTyping);
    }
  });

  socket.on("disconnect", () => {
    removeUserOnline(socket.id);
    console.log("disconnect", arrayOnlineUsers);
  });
});

app.use((req, res, next) => res.status(404).json({ error: "Not Found" }));

app.use((err, req, res, next) => {
  res.status(err.status || 500).json(err.message);
});

export { app, io, httpServer };
