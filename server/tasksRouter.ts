import express, { NextFunction, Request, Response } from "express";

export const TASKS = [
  { _id: 1, title: "task one from route" },
  { _id: 2, title: "task two from route" },
];

export const tasksRouter = express.Router();

tasksRouter.get("/api/tasks", (req, res) => {
  setTimeout(() => {
    return res.send(TASKS);
  }, 500);
});

tasksRouter.post("/api/tasks", (req, res) => {
  const { title } = req.body;
  setTimeout(() => {
    TASKS.push({ _id: TASKS.length + 1, title });
    res.sendStatus(201);
  }, 500);
});
