import express from "express";

const app = express();

app.get("/api/movies", (req, res) => {
    res.json([
        { title: "Barbie", year: "2023" },
        { title: "Oppenheimer", year: "2023" },
        { title: "Bad year", year: "2023" },
    ])
})

app.use(express.static("../client/dist/"))


app.listen(3000);

