import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import { createMoviesApi, Movie } from "../moviesApi";
import dotenv from "dotenv";
import { Db, MongoClient } from "mongodb";

dotenv.config();

const app = express();
app.use(bodyParser.json());

let connection: MongoClient;

beforeEach(async () => {
  connection = await new MongoClient(process.env.ATLAS_URL!).connect();
  app.use("/api/movies", createMoviesApi(connection.db("test")));
});

afterEach(async () => {
  await connection.close();
});

describe("movies api", function () {
  it("can add a movie to the database", async () => {
    const movie = { title: "My Movie " + new Date() };
    await request(app).post("/api/movies").send(movie).expect(200);

    const res = await request(app).get("/api/movies");
    expect(res.status).toEqual(200);
    expect(res.body.map((m: Movie) => m.title)).toContainEqual(movie.title);
  });
});
