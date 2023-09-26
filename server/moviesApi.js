import express from "express";

export const moviesApi = express.Router();
moviesApi.get("", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Oppenheimer from route",
    },
    {
      id: 2,
      title: "Barbie from route",
    },
  ]);
});
