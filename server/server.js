import express from "express";
import bodyParser from "body-parser";
import cookieParse from "cookie-parser";
import {isCorrectAnswer, randomQuestion, Questions} from "./questions.js";

const app = express();
app.use(bodyParser.json());
app.use(cookieParse("random-noise-to-sign-cookies"));
app.use(express.static("../client/dist"));

app.get("/api/questions/random", (req, res) => {
    const {id, question, answers} = randomQuestion();
    res.json({id, question, answers})
})

app.post("/api/questions/answer", (req, res) => {
    const {id, answer} = req.body;
    const question = Questions.find(q => q.id === id);
    const correct = isCorrectAnswer(question, answer);

    const score = req.signedCookies?.quizScore
        ? JSON.parse(req.signedCookies.quizScore)
        : { answers: 0, correctAnswers: 0 }

    const {answers, correctAnswers} = score;
    const newScore = {
        answers: answers+1,
        correctAnswers: correctAnswers + (correct ? 1 : 0)
    }
    console.log(req.signedCookies, {score, newScore});
    res
        .cookie("quizScore", JSON.stringify(newScore), {signed: true})
        .json({correct})
})

app.get("/api/score", (req, res) => {
    const score = req.signedCookies?.quizScore
        ? JSON.parse(req.signedCookies.quizScore)
        : { answers: 0, correctAnswers: 0 }
    res.json(score);
})

app.listen(process.env.PORT || 3000);
