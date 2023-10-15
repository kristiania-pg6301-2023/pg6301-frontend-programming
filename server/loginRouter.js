import express from "express";

export const loginRouter = express.Router();

loginRouter.get("", (req, res) => {
  res.sendStatus(401);
});

loginRouter.post("", (req, res) => {
  console.log(req.body);
  res.sendStatus(204);
});
