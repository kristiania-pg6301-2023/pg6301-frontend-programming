import express from "express";
import * as path from "path";

const app = express();

app.get("/api/todos", (req, res) => {
    res.json([
        { title: "prepare lecture" },
        { title: "give lecture" }
    ])
})


app.use(express.static(path.join("..", "client", "dist")));

app.listen(3000);