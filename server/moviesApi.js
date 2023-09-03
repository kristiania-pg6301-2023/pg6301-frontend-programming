import express from "express";

export const moviesApi = new express.Router();

const movies = [
  { title: "Barbie", year: "2023", plot: "Adventures in Pink" },
  { title: "Oppenheimer", year: "2023", plot: "The Manhattan project" },
];

moviesApi.post("", (req, res) => {
  const { title } = req.body;
  movies.push({ title });
  res.send();
});

moviesApi.get("", (req, res) => {
  res.json(movies);
});
