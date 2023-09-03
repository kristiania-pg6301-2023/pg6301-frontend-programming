import express from "express";

export const moviesApi = new express.Router();

moviesApi.post("", (req, res) => {
  res.send();
});

moviesApi.get("", (req, res) => {
  res.json([]);
});
