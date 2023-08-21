import express from "express";
import path from "path";

const app = express();

app.get("/api/movies", (req, res) => {
    res.json([
        {title: "Oppenheimer", year: "2023", plot: "Boom!"},
        {title: "Barbie", year: "2023", plot: "Plastic"}
    ])
});

app.use(express.static("../client/dist"));
app.use((req, res, next) => {
    if (req.method === "GET") {
        res.sendFile(path.resolve("..", "client", "dist", "index.html"))
    } else {
        next();
    }
})

app.listen(3000);
