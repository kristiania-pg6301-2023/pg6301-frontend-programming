import express from "express";
import { fetchUserInfo } from "./userinfoMiddleware.js";

export function createAuthRouter(db, { openid_configuration, client_id }) {
  const userRouter = express.Router();
  userRouter.get("/api/config", (req, res) => {
    const user = req.user;
    res.send({ user, openid_configuration, client_id });
  });

  userRouter.post("/api/login", async (req, res) => {
    const { access_token } = req.body;
    const user = await fetchUserInfo(openid_configuration, access_token);
    res.cookie("access_token", access_token);
    await db
      .collection("users")
      .insertOne({ username: user.name, date: new Date() });
    res.sendStatus(201);
  });
  return userRouter;
}
