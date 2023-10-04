import express from "express";
import request from "supertest";

const app = express();
app.use((req, res, next) => {
  res.send({ foo: "bar" });
});

describe("sample api", () => {
  it("calls an API", async () => {
    await request(app).get("/hello/there").expect(200).expect({ foo: "bar" });
  });
});
