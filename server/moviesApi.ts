import express from "express";
import { Db } from "mongodb";

export interface Movie {
  title: string;
  year?: number;
  plot?: string;
}

export function createMoviesApi(database: Db) {
  const moviesApi = express.Router();

  moviesApi.post("/", async (req, res) => {
    const { title, plot } = req.body;
    const year = parseInt(req.body.year);
    await database
      .collection("movies")
      .insertOne({ title, plot, year } as Movie);
    res.send();
  });

  moviesApi.get("/", async (req, res) => {
    const query = {} as Record<string, unknown>;
    if (req.query.countries?.length) {
      query["countries"] = req.query.countries;
    }
    if (req.query.year?.length) {
      query["year"] = parseInt(req.query.year as string);
    }
    const movies = await database
      .collection("movies")
      .find(query)
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
