import express, { NextFunction, Request, Response } from "express";

export const TASKS = [
  { _id: 1, title: "task one from route" },
  { _id: 2, title: "task two from route" },
];

export const tasksRouter = express.Router();

function delay(millis: number) {
  return new Promise<undefined>((resolve, reject) => {
    setTimeout(() => resolve(undefined), millis);
  });
}

tasksRouter.get("/api/tasks", async (req, res) => {
  await delay(400);
  return res.send(TASKS);
});

tasksRouter.post("/api/tasks", async (req, res) => {
  const { title } = req.body;
  await delay(300);
  TASKS.push({ _id: TASKS.length + 1, title });
  res.sendStatus(201);
});
