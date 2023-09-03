import express from "express";
import {randomQuestion} from "./questions.js";

const app = express();

app.use(express.static("../client/dist"));

app.get("/api/questions/random", (req, res) => {
    const {id, question, answers} = randomQuestion();
    res.json({id, question, answers})
})


app.listen(3000);
