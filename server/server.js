import express from "express";

const app = express();

app.get("/api/movies", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Oppenheimer from server",
    },
    {
      id: 2,
      title: "Barbie from server",
    },
  ]);
});

app.use(express.static("../client/dist"));

app.listen(process.env.PORT || 3000);
