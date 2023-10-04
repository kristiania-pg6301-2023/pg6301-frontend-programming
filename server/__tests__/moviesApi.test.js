import request from "supertest";
import express from "express";
import { createMoviesRouter, moviesApi } from "../moviesApi.js";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());

beforeAll(async () => {
  app.use(moviesApi);
  const url = process.env.MONGODB_URL;
  const client = new MongoClient(url);
  const db = (await client.connect()).db("unit_tests");
  createMoviesRouter(db);
});

describe("movies api", () => {
  it("lets the user add a new movie", async () => {
    const title = "My New Movie added at " + new Date();

    await request(app)
      .post("")
      .send({
        title,
        countries: ["Norway", "Sweden"],
        metacritic: 100,
        year: 2023,
      })
      .expect(204);
    const res = await request(app).get("");
    expect(res.status).toBe(200);
    expect(res.body.map((m) => m.title)).toContain(title);
  });
});
