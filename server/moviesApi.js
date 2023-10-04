import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export const moviesApi = express.Router();

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
      .sort({ metacritic: -1 })
      .project({ title: 1, plot: 2, year: 3, metacritic: 4 })
      .limit(20)
      .toArray();
    res.json(movies);
  });

  moviesApi.post("", async (req, res) => {
    const { title, plot, year, metacritic, countries } = req.body;
    await db
      .collection("movies")
      .insertOne({ title, plot, year, metacritic, countries });
    res.sendStatus(204);
  });
}

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

client.connect().then((connection) => {
  const db = connection.db("sample_mflix");
  createMoviesRouter(db);
});
