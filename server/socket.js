import { addUserOnline, removeUserOnline, findUsers } from "./userFunSocket.js";
import { createMessageQuery } from "./queries/chat/index.js";
import http from "http";
import { Server } from "socket.io";
import app from "./app.js";

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

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
    removeUserOnline(socket);
  });
});

export default httpServer;
