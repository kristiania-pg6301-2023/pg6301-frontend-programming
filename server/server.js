import express from "express";
import cookieParser from "cookie-parser";
import * as path from "path";
import { userinfoMiddleware } from "./userinfoMiddleware.js";
import dotenv from "dotenv";

dotenv.config();

const openid_configuration = process.env.OPENID_CONFIGURATION;
const client_id = process.env.CLIENT_ID;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(userinfoMiddleware(openid_configuration));

app.get("/api/config", (req, res) => {
  const user = req.user;
  res.send({ user, openid_configuration, client_id });
});
app.post("/api/login", (req, res) => {
  const { access_token } = req.body;
  res.cookie("access_token", access_token);
  res.sendStatus(201);
});


app.use(express.static("../client/dist/"));
app.use((req, res, next) => {
  if (req.method === "GET") {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

app.listen(3000);
