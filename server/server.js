import express from "express";
import { loginRouter } from "./loginRouter.js";
import * as path from "path";

const app = express();
app.use(express.json());

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
