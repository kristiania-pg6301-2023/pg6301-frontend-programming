import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import { moviesApi } from "../moviesApi";

const app = express();
app.use(bodyParser.json());
app.use("/api/movies", moviesApi);

describe("movies api", function () {
  it("can add a movie to the database", async () => {
    const movie = { title: "My Movie" };
    await request(app).post("/api/movies").send(movie).expect(200);

    const res = await request(app).get("/api/movies");
    expect(res.status).toEqual(200);
    expect(res.body).toContainEqual(movie);
  });
});
