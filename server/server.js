import express from "express";

const app = express();
app.get("/api/movies", (req, res) => {
  res.json([
    { title: "Barbie", year: "2023", plot: "Adventures in Pink" },
    { title: "Oppenheimer", year: "2023", plot: "The Manhattan project" },
  ]);
});

app.use(express.static("../client/dist"));

app.listen(3000);
