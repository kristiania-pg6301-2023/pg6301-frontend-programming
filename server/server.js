import express from "express";

import { moviesApi } from "./moviesApi.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use("/api/movies", moviesApi);
app.use(express.static("../client/dist"));

app.listen(3000);
