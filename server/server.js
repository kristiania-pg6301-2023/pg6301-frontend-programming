import express from "express";

const app = express();

app.get("/api/movies", (req, res) => {
    res.json([
        {title: "Oppenheimer"},
    ])
})

app.use(express.static("../client/dist"));

app.listen(3000);
