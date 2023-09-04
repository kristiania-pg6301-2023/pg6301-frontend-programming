import request from "supertest";

import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { quizApi } from "../quizApi.js";

const app = express();
app.use(bodyParser.json());
app.use(cookieParser("random secret"))
app.use(quizApi);

describe("Quiz API", () => {

  it("returns random question", async () => {
    const res = await request(app).get("/api/questions/random");
    expect(res.status).toEqual(200);
    const question = res.body;
    expect(Object.keys(question)).toEqual([
      "id", "question", "answers"
    ]);
  });

  it("responds with correct answer", async () => {
    const res = await request(app).post("/api/questions/answer")
      .send({id: 974, answer: "answer_b"});
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({correct: true});
  });

  it("responds with wrong answer", async () => {
    const res = await request(app).post("/api/questions/answer")
      .send({id: 974, answer: "answer_c"});
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({correct: false});
  });

});
