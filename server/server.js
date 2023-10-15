import express from "express";
import { loginRouter } from "./loginRouter.js";
import * as path from "path";

const app = express();

app.use("/api/login", loginRouter);
app.use(express.static("../client/dist"));
app.use((req, res, next) => {
  res.sendFile(path.resolve("../client/dist/index.html"));
});
app.listen(3000);
