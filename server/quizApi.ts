import express from "express";
import { isCorrectAnswer, Questions, randomQuestion } from "./questions";

export const quizApi = express.Router();

quizApi.get("/api/questions/random", (req, res) => {
  const { id, question, answers } = randomQuestion();
  res.json({ id, question, answers });
});

quizApi.post("/api/questions/answer", (req, res) => {
  const { id, answer } = req.body;
  const question = Questions.find((q) => q.id === id)!;
  const correct = isCorrectAnswer(question, answer);

  const score = req.signedCookies?.quizScore
    ? JSON.parse(req.signedCookies.quizScore)
    : { answers: 0, correctAnswers: 0 };

  const { answers, correctAnswers } = score;
  const newScore = {
    answers: answers + 1,
    correctAnswers: correctAnswers + (correct ? 1 : 0),
  };
  res
    .cookie("quizScore", JSON.stringify(newScore), { signed: true })
    .json({ correct });
});

quizApi.get("/api/score", (req, res) => {
  const score = req.signedCookies?.quizScore
    ? JSON.parse(req.signedCookies.quizScore)
    : { answers: 0, correctAnswers: 0 };
  res.json(score);
});
