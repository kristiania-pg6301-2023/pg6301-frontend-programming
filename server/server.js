import express from "express";
import cookieParser from "cookie-parser";
import * as path from "path";
import { fetchJSON } from "./fetchJSON.js";

const openid_configuration =
  "https://accounts.google.com/.well-known/openid-configuration";
const client_id =
  "34816606807-c674fr663n4s8lqjmtr5i444qnosva3b.apps.googleusercontent.com";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(async (req, res, next) => {
  const { access_token } = req.cookies;
  if (access_token) {
    const { userinfo_endpoint } = await fetchJSON(openid_configuration);
    const res = await fetch(userinfo_endpoint, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    if (res.ok) {
      req.user = await res.json();
    } else if (res.status !== 401) {
      throw new Error("Failed to fetch userinfo " + res.statusCode);
    }
  }
  next();
});

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
