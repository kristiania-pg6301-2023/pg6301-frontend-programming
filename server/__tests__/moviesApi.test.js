import request from "supertest";
import express from "express";
import { moviesApi } from "../moviesApi.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(moviesApi);

describe("movies api", () => {
  it("lets the user add a new movie", async () => {
    const title = "My New Movie added at " + new Date();

    await request(app).post("").send({ title }).expect(204);
    const res = await request(app).get("");
    expect(res.status).toBe(200);
    expect(res.body.map((m) => m.title)).toContain(title);
  });
});
