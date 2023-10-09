import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import * as path from "path";

dotenv.config();

const app = express();

app.use((req, res, next) => {
  if (req.path === "/api/tasks" && req.method === "GET") {
    setTimeout(() => {
      return res.send([
        { _id: 1, title: "task one from the server" },
        { _id: 2, title: "task two from the server" },
      ]);
    }, 500);
  } else {
    next();
  }
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
