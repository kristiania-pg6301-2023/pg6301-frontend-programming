import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export const moviesApi = express.Router();
const MOVIES = [
  {
    id: 1,
    title: "Oppenheimer from route",
  },
  {
    id: 2,
    title: "Barbie from route",
  },
];

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

client.connect().then((connection) => {
  moviesApi.get("", async (req, res) => {
    const movies = await connection
      .db("sample_mflix")
      .collection("movies")
      .find()
      .filter({ countries: "Norway", year: 2012 })
      .limit(20)
      .toArray();
    res.json(movies);
  });
});

moviesApi.post("", (req, res) => {
  const { title } = req.body;
  MOVIES.push({ id: MOVIES.length + 1, title });
  res.sendStatus(204);
});
