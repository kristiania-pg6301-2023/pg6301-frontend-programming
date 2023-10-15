import express from "express";

export const loginRouter = express.Router();

loginRouter.get("", (req, res) => {
  res.sendStatus(401);
});
