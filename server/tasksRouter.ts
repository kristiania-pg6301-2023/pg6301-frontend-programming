import { NextFunction, Request, Response } from "express";

export const TASKS = [
  { _id: 1, title: "task one from the server" },
  { _id: 2, title: "task two from the server" },
];

export const tasksRouter = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.path === "/api/tasks" && req.method === "GET") {
    setTimeout(() => {
      return res.send(TASKS);
    }, 500);
  } else if (req.path === "/api/tasks" && req.method === "POST") {
    const { title } = req.body;
    setTimeout(() => {
      TASKS.push({ _id: TASKS.length + 1, title });
      res.sendStatus(201);
    }, 500);
  } else {
    next();
  }
};
