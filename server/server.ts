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
  console.log({ db });
  const router = async (req: Request, res: Response, next: NextFunction) => {
    if (req.path.startsWith("/api/movies")) {
      if (req.path === "/api/movies/parameters") {
        const years = await db
          .collection("movies")
          .distinct("year", { countries: "Norway" });
        return res.send({ years });
      }
      res.sendStatus(404);
    } else {
      next();
    }
  };
  return router;
}
