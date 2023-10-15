import express from "express";

export const loginRouter = express.Router();

loginRouter.get("", (req, res) => {
  const username = req.cookies["username"];
  if (username) {
    res.send({ username });
  } else {
    res.sendStatus(401);
  }
});

loginRouter.post("", (req, res) => {
  const { username, password } = req.body;
  res.cookie("username", username);
  res.sendStatus(204);
});
