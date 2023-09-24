import express from "express";

import { createMoviesApi } from "./moviesApi";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(express.static("../client/dist"));

app.listen(3000);

new MongoClient(process.env.ATLAS_URL!)
  .connect()
  .then((connection) => {
    const database = connection.db("sample_mflix");
    app.use("/api/movies", createMoviesApi(database));
  })
  .catch((error) => {
    console.error("while connecting to MongoDB", error);
  });
