import express from "express";
import bodyParser from "body-parser";
import {isCorrectAnswer, randomQuestion, Questions} from "./questions.js";

const app = express();
app.use(bodyParser.json());
app.use(express.static("../client/dist"));

app.get("/api/questions/random", (req, res) => {
    const {id, question, answers} = randomQuestion();
    res.json({id, question, answers})
})

app.post("/api/questions/answer", (req, res) => {
    const {id, answer} = req.body;
    const question = Questions.find(q => q.id === id);
    const correct = isCorrectAnswer(question, answer);
    res.json({correct})
})


app.listen(3000);
