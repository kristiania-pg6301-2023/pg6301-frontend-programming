import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const movies = [
    { title: "Barbie", year: "2023" },
    { title: "Oppenheimer", year: "2023" },
    { title: "Bad year", year: "2023" },
];
app.get("/api/movies", (req, res) => {
    res.json(movies)
})

app.post("/api/movies", (req, res) => {
    const {title, year, plot} = req.body;
    movies.push({title, year, plot});
})

app.use(express.static("../client/dist/"))


app.listen(3000);

