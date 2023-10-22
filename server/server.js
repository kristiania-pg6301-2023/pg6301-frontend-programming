import express from "express";
import cookieParser from "cookie-parser";
import * as path from "path";
import { WebSocketServer } from "ws";

const app = express();

const cookieSecret = "SECRET";
app.use(cookieParser(cookieSecret));
app.use(express.json());

app.use((req, res, next) => {
  const { username } = req.signedCookies;
  req.user = { username };
  next();
});

const loginRouter = express.Router();
loginRouter.get("/api/login", (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.sendStatus(401);
  }
});
loginRouter.post("/api/login", (req, res) => {
  const { username } = req.body;
  res.cookie("username", username, { signed: true });
  res.sendStatus(201);
});

app.use(loginRouter);

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
server.on("upgrade", (req, socket, head) => {
  webSocketServer.handleUpgrade(req, socket, head, (socket) => {
    if (!req.user) {
      socket.send(JSON.stringify({ authenticated: false }));
      return socket.close();
    }
    socket.on("message", (message) => {
      console.log("Received message", message.toString());
      for (const s of sockets) {
        s.send(message.toString());
      }
    });
    socket.send("Hello " + req.user.username);
    sockets.push(socket);
  });
});
