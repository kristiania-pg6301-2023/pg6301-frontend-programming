import express from "express";
import * as path from "path";
import { WebSocketServer } from "ws";

const app = express();
app.use(express.static("../client/dist"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const webSocketServer = new WebSocketServer({ noServer: true });

const sockets = [];

const server = app.listen(process.env.PORT || 3000, () => {});
server.on("upgrade", (req, res, head) => {
  webSocketServer.handleUpgrade(req, res, head, (socket) => {
    socket.on("message", (message) => {
      console.log("Received message", message.toString());
      for (const s of sockets) {
        s.send(message.toString());
      }
    });
    socket.send("Hello");
    sockets.push(socket);
  });
});
