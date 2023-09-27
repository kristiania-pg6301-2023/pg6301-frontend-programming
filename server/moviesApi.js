import express from "express";

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

moviesApi.get("", (req, res) => {
  res.json(MOVIES);
});

moviesApi.post("", (req, res) => {
  const { title } = req.body;
  MOVIES.push({ id: MOVIES.length + 1, title });
  res.sendStatus(204);
});
