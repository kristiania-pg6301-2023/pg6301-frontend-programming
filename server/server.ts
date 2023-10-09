import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { Db, MongoClient } from "mongodb";
import * as path from "path";
import { tasksRouter } from "./tasksRouter";

dotenv.config();

const app = express();
app.use(express.json());

const client = new MongoClient(process.env.MONGODB_URL!);
client.connect().then(async (connection) => {
  const db = connection.db("sample_mflix");
  app.use(createMoviesRouter(db));
  app.use(tasksRouter);
  app.use(express.static("../client/dist"));
  app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api")) {
      res.sendFile(path.resolve("../client/dist/index.html"));
    } else {
      next();
    }
  });
});

app.listen(3000);

function createMoviesRouter(db: Db) {
  const router = express.Router();
  router.get("/api/movies/parameters", async (req, res) => {
    const collection = db.collection("movies");
    const years = await collection.distinct("year", { countries: "Norway" });
    const countries = await collection.distinct("countries");
    return res.send({ years, countries });
  });
  return router;
}
