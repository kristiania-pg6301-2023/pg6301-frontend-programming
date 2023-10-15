import express from "express";

export const loginRouter = express.Router();

loginRouter.get("", async (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.sendStatus(401);
  }
});

loginRouter.post("", (req, res) => {
  const { username, password } = req.body;
  res.cookie("username", username, { signed: true });
  res.sendStatus(204);
});

loginRouter.post("/accessToken", (req, res) => {
  const { access_token } = req.body;
  res.cookie("access_token", access_token, { signed: true });
  res.sendStatus(204);
});

loginRouter.delete("", (req, res) => {
  res.clearCookie("username");
  res.clearCookie("access_token");
  res.sendStatus(204);
});
