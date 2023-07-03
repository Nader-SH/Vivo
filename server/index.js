import app from "./app.js";
import httpServer  from "./socket.js";

const port = app.get("port");

httpServer.listen(8081, () => {
  console.log("Socket.IO server listening on port 8081");
});

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`server is running on http://localhost:${port}`)
);
