import express from "express";
import cookieParser from "cookie-parser";
import * as path from "path";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

const DISCOVERY_URL =
  "https://accounts.google.com/.well-known/openid-configuration";

app.use(async (req, res, next) => {
  const { username, access_token } = req.signedCookies;
  if (access_token) {
    const res = await fetch(DISCOVERY_URL);
    const discoveryDoc = await res.json();

    const userinfoRes = await fetch(discoveryDoc.userinfo_endpoint, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    if (!userinfoRes.ok) {
      throw new Error("The error was " + userinfoRes.statusText);
    }
    const userinfo = await userinfoRes.json();

    req.user = { ...userinfo, username: userinfo.email };
  } else {
    req.user = { username };
  }
  next();
});

const loginRouter = express.Router();
loginRouter.post("", (req, res) => {
  res.cookie("username", req.body.username, { signed: true });
  res.sendStatus(204);
});
loginRouter.post("/access_token", (req, res) => {
  res.cookie("access_token", req.body.access_token, { signed: true });
  res.sendStatus(204);
});
loginRouter.get("", (req, res) => {
  res.send(req.user);
});
loginRouter.delete("", (req, res) => {
  res.clearCookie("username");
  res.sendStatus(204);
});

app.use("/api/login", loginRouter);

app.use(express.static("../client/dist"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

app.listen(3000);
