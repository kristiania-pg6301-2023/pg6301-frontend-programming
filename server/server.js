import express from "express";

import { moviesApi } from "./moviesApi.js";

const app = express();
app.use("/api/movies", moviesApi);
app.use(express.static("../client/dist"));

app.listen(3000);
