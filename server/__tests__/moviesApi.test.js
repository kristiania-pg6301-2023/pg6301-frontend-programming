import request from "supertest";
import express from "express";
import { moviesApi } from "../moviesApi.js";

const app = express();
app.use(moviesApi);

let expectedJson = [
  {
    id: 1,
    title: "Oppenheimer from route",
  },
  {
    id: 2,
    title: "Barbie from route",
  },
];

describe("movies api", () => {
  it("return movies", async () => {
    await request(app).get("").expect(expectedJson);
  });
});
