import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import { createMoviesApi } from "../moviesApi";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const app = express();
app.use(bodyParser.json());

beforeEach(async () => {
  const db = await new MongoClient(process.env.ATLAS_URL!).connect();
  app.use("/api/movies", createMoviesApi(db.db("test")));
});

describe("movies api", function () {
  it("can add a movie to the database", async () => {
    const movie = { title: "My Movie" };
    await request(app).post("/api/movies").send(movie).expect(200);

    const res = await request(app).get("/api/movies");
    expect(res.status).toEqual(200);
    expect(res.body).toContainEqual(movie);
  });
});
