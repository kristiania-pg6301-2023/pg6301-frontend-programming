import express from "express";

export const loginRouter = express.Router();

loginRouter.get("", (req, res) => {
  res.send({
    username: "Johannes from server",
  });
});
