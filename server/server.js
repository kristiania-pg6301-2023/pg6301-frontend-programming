import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const movies = [
    {title: "Oppenheimer", year: "2023", plot: "Boom!"},
    {title: "Barbie", year: "2023", plot: "Plastic"}
];

app.get("/api/movies", (req, res) => {
    res.json(movies)
});

app.post("/api/movies", (req, res) => {
    const {title, year, plot} = req.body;
    movies.push({title, year, plot});
    res.sendStatus(204);
})

app.use(express.static("../client/dist"));
app.use((req, res, next) => {
    if (req.method === "GET") {
        res.sendFile(path.resolve("..", "client", "dist", "index.html"))
    } else {
        next();
    }
})

app.listen(process.env.PORT || 3000);
