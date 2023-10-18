import express from "express";
import cookieParser from "cookie-parser";
import * as path from "path";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  const { username } = req.cookies;
  req.user = {
    username: "not authenticated " + username,
  };
  next();
});

const loginRouter = express.Router();
loginRouter.post("", (req, res) => {
  res.cookie("username", req.body.username);
  res.sendStatus(204);
});
loginRouter.get("", (req, res) => {
  res.send(req.user);
});

app.use("/api/login", loginRouter);

app.use(express.static("../client/dist"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

app.listen(3000);
