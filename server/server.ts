import express from "express";
import bodyParser from "body-parser";
import cookieParse from "cookie-parser";
import { quizApi } from "./quizApi";

const app = express();
app.use(bodyParser.json());
app.use(cookieParse("random-noise-to-sign-cookies"));
app.use(express.static("../client/dist"));
app.use(quizApi);

app.listen(process.env.PORT || 3000);
