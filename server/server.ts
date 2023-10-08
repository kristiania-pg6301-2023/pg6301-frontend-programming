import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import * as path from "path";

dotenv.config();

const app = express();

app.use((req, res, next) => {
  if (req.path === "/api/tasks" && req.method === "GET") {
    return res.send([
      { id: 1, title: "task one" },
      { id: 2, title: "task two" },
    ]);
  }
  next();
});
app.use(express.static("../client/dist"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

app.listen(3000);

const client = new MongoClient(process.env.MONGODB_URL!);
client.connect().then(async (connection) => {
  const db = connection.db("sample_mflix");
  const movies = await db
    .collection("movies")
    .distinct("year", { countries: "Norway" });
  console.log(movies);
});
