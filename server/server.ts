import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import * as path from "path";
dotenv.config();

const app = express();
app.use(express.static("../client/dist"));
app.listen(3000);

function delay(millis: number, errorMessage?: string): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (errorMessage) {
        reject(errorMessage);
      } else {
        resolve();
      }
    }, millis);
  });
}

app.use(async (req, res, next) => {
  if (req.path === "/api/tasks") {
    await delay(2000);
    res.send([
      { _id: "1", title: "Task one from server" },
      { _id: "2", title: "Task two from server" },
    ]);
  } else {
    next();
  }
});

app.use((req, res, next) => {
  res.sendFile(path.resolve("../client/dist/index.html"));
});

const client = new MongoClient(process.env.MONGODB_URL!);
client.connect().then(async (connection) => {
  const db = connection.db("sample_mflix");
  const movies = await db
    .collection("movies")
    .distinct("year", { countries: "Norway" });
  console.log(movies);
});
