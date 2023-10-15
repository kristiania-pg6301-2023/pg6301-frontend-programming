import express from "express";

export const loginRouter = express.Router();

loginRouter.get("", (req, res) => {
  const username = req.signedCookies["username"];
  if (username) {
    res.send({ username });
  } else {
    res.sendStatus(401);
  }
});

loginRouter.post("", (req, res) => {
  const { username, password } = req.body;
  res.cookie("username", username, { signed: true });
  res.sendStatus(204);
});
