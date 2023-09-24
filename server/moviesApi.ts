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

    moviesApi.post("", (req, res) => {
      const { title } = req.body as Movie;
      movies.push({ title });
      res.send();
    });

    moviesApi.get("", async (req, res) => {
      const movies = await database
        .collection("movies")
        .find({ year: 2013 })
        .limit(200)
        .toArray();
      res.json(movies);
    });
  })
  .catch((error) => {
    console.error("while connecting to MongoDB", error);
  });
