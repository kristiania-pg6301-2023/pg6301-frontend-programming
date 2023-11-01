import express from "express";
import cookieParser from "cookie-parser";
import * as path from "path";
import { userinfoMiddleware } from "./userinfoMiddleware.js";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { createAuthRouter } from "./authRouter.js";

dotenv.config();

const openid_configuration = process.env.OPENID_CONFIGURATION;
const client_id = process.env.CLIENT_ID;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(userinfoMiddleware(openid_configuration));

new MongoClient(process.env.MONGODB_URL).connect().then(async (connection) => {
  const db = connection.db("user_database");
  db.collection("users").find().toArray().then(console.log);
  app.use(createAuthRouter(db, { openid_configuration, client_id }));
});

app.use(express.static("../client/dist/"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

app.listen(process.env.PORT || 3000);
