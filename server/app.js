import express from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import { join } from "path";
import router from "./routes/index.js";

dotenv.config();
const app = express();
const { NODE_ENV } = process.env;

app.set("port", process.env.PORT || 8080);

app.use([
  compression(),
  cookieParser(),
  express.urlencoded({ extended: false }),
  express.json(),
]);

app.use("/api/v1", router);

if (NODE_ENV === "production") {
  app.use(express.static(join(__dirname, "..", "client", "build")));
  app.get("*", (req, res) => {
    const buf = iconv.encode(data, 'windows-1252');
    const str = iconv.decode(buf, 'windows-1252');
    res.sendFile(join(__dirname, "..", "client", "build", "index.html"));
    res.send(str);
  });
}
app.use((req, res, next) => res.status(404).json({ error: "Not Found" }));

app.use((err, req, res, next) => {
  res.status(err.status || 500).json(err.message);
});

export default app;
