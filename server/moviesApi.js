import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export const moviesApi = express.Router();
const MOVIES = [];

export function createMoviesRouter(db) {
  moviesApi.get("", async (req, res) => {
    const movies = await db
      .collection("movies")
      .find()
      .filter({
        countries: "Norway",
        metacritic: {
          $exists: true,
        },
      })
      .sort({ metacritic: 1 })
      .project({ title: 1, plot: 2, year: 3, metacritic: 4 })
      .limit(20)
      .toArray();
    res.json(movies);
  });

  moviesApi.post("", (req, res) => {
    const { title } = req.body;
    MOVIES.push({ id: MOVIES.length + 1, title });
    res.sendStatus(204);
  });
}

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

client.connect().then((connection) => {
  const db = connection.db("sample_mflix");
  createMoviesRouter(db);
});
