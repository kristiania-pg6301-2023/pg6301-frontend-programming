import express from "express";

export const moviesApi = express.Router();

interface Movie {
  title: string;
  year?: string;
  plot?: string;
}

const movies: Movie[] = [
  { title: "Barbie", year: "2023", plot: "Adventures in Pink" },
  { title: "Oppenheimer", year: "2023", plot: "The Manhattan project" },
];

moviesApi.post("", (req, res) => {
  const { title } = req.body as Movie;
  movies.push({ title });
  res.send();
});

moviesApi.get("", (req, res) => {
  res.json(movies);
});
