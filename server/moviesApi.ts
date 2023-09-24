import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export const moviesApi = express.Router();

interface Movie {
  title: string;
  year?: string;
  plot?: string;
}

const movies: Movie[] = [];

const client = new MongoClient(process.env.ATLAS_URL!);
client
  .connect()
  .then((connection) => {
    const database = connection.db("sample_mflix");

    moviesApi.post("/", (req, res) => {
      const { title } = req.body as Movie;
      movies.push({ title });
      res.send();
    });

    moviesApi.get("/", async (req, res) => {
      const movies = await database
        .collection("movies")
        .find({ year: 2013, countries: { $in: ["Norway", "Sweden"] } })
        .sort({ metacritic: -1 })
        .project({
          title: 1,
          plot: 2,
          year: 3,
          cast: 4,
          countries: 5,
        })
        .limit(200)
        .toArray();
      res.json(movies);
    });

    moviesApi.get("/parameters", async (req, res) => {
      const years = (
        await database.collection("movies").distinct("year")
      ).filter((year) => typeof year == "number");
      res.json({ years });
    });
  })
  .catch((error) => {
    console.error("while connecting to MongoDB", error);
  });
