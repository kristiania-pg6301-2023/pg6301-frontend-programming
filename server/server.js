import express from "express";
import cookieParser from "cookie-parser";
import { loginRouter } from "./loginRouter.js";
import dotenv from "dotenv";
import * as path from "path";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_PARSER_SECRET));

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
