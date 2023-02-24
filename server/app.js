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

if (NODE_ENV === "production") {
  app.use(express.static(join(__dirname, "..", "client", "build")));
  app.get("*", (req, res) => {
    const buf = iconv.encode(data, "windows-1252");
    const str = iconv.decode(buf, "windows-1252");
    res.sendFile(join(__dirname, "..", "client", "build", "index.html"));
    res.send(str);
  });
}

io.on("connection", (socket) => {

  console.log(`A user connected ${socket.id}`);
  socket.on("send_message", (data) => {

    console.log( data , socket.id ,"data");
    // console.log(data.userSocketId);

    io.emit("message", data);
    // io.to(socket.id).emit("message", data);
  });
  socket.on('typing', (isTyping) => {
    console.log(isTyping);
    socket.broadcast.emit('typing', isTyping);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
app.use((req, res, next) => res.status(404).json({ error: "Not Found" }));

app.use((err, req, res, next) => {
  res.status(err.status || 500).json(err.message);
});

export { app, io, httpServer };
