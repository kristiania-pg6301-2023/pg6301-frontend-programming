import express from "express";
import cookieParser from "cookie-parser";
import * as path from "path";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use((req, res, next) => {
  const { username } = req.signedCookies;
  req.user = { username };
  next();
});

const loginRouter = express.Router();
loginRouter.post("", (req, res) => {
  res.cookie("username", req.body.username, { signed: true });
  res.sendStatus(204);
});
loginRouter.post("/access_token", (req, res) => {
  res.cookie("access_token", req.body.access_token, { signed: true });
  res.sendStatus(204);
});
loginRouter.get("", (req, res) => {
  res.send(req.user);
});
loginRouter.delete("", (req, res) => {
  res.clearCookie("username");
  res.sendStatus(204);
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
