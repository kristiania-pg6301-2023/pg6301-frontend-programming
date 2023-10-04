import express from "express";
import { createMoviesRouter, moviesApi } from "./moviesApi.js";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use("/api/movies", moviesApi);
app.use(express.static("../client/dist"));

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

client.connect().then((connection) => {
  const db = connection.db("sample_mflix");
  createMoviesRouter(db);
});

app.listen(process.env.PORT || 3000);
