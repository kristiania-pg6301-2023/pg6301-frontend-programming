import express from "express";
import path from "path";

const app = express();

app.get("/api/movies", (req, res) => {
    res.json([
        {title: "Oppenheimer"},
        {title: "Barbie"}
    ])
})

app.use(express.static("../client/dist"));
app.use((req, res) => {
    res.sendFile(path.resolve("..", "client", "dist", "index.html"))
})

app.listen(3000);
