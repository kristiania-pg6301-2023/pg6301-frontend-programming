import express from "express";
import * as path from "path";

const openid_configuration =
  "https://accounts.google.com/.well-known/openid-configuration";
const client_id =  "34816606807-c674fr663n4s8lqjmtr5i444qnosva3b.apps.googleusercontent.com";

const app = express();

app.use(express.json());

app.use(express.static("../client/dist/"));

app.get("/api/config", (req, res) => {
  const user = req.user;
  res.send({ user, openid_configuration, client_id });
});

app.post("/api/login", (req, res) => {
  const {access_token} = req.body;
  res.cookie("access_token", access_token);
  res.sendStatus(201);
})

app.use((req, res, next) => {
  if (req.method === "GET") {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
})

app.listen(3000);
