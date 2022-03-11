import express from "express";
import * as path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.post("/api/login", (req, res) => {
  const { access_token } = req.body;
  res.cookie("access_token", access_token, { signed: true });
  res.sendStatus(200);
});

app.use(express.static("../client/dist"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
});
