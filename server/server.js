import express from "express";
import * as path from "path";
import { WebSocketServer } from "ws";

const app = express();

app.use(express.static("../client/dist/"));

app.use((req, res, next) => {
  if (req.method === "GET") {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const wsServer = new WebSocketServer({ noServer: true });

const server = app.listen(process.env.PORT || 3000);

server.on("upgrade", (req, socket, head) => {
  wsServer.handleUpgrade(req, socket, head, (socket) => {
    socket.send("Hello from the server");
  });
});
