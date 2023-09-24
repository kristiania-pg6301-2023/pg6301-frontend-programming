import express from "express";
import { Db } from "mongodb";

export interface Movie {
  title: string;
  year?: string;
  plot?: string;
}

export function createMoviesApi(database: Db) {
  const moviesApi = express.Router();

  moviesApi.post("/", async (req, res) => {
    const { title, plot, year } = req.body as Movie;
    await database.collection("movies").insertOne({ title, plot, year });
    res.send();
  });

  moviesApi.get("/", async (req, res) => {
    const { countries } = req.query;
    const year = req.query.year
      ? parseInt(req.query.year as string)
      : undefined;
    const movies = await database
      .collection("movies")
      .find({ year, countries })
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
    const years = (await database.collection("movies").distinct("year")).filter(
      (year) => typeof year == "number",
    );
    const countries = await database.collection("movies").distinct("countries");
    res.json({ countries, years });
  });

  return moviesApi;
}
