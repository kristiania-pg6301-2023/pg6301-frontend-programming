import express from "express";
import { loginRouter } from "./loginRouter.js";

const app = express();

app.use("/api/login", loginRouter);
app.use(express.static("../client/dist"));
app.listen(3000);
