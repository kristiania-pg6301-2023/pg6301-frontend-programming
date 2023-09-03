import express from "express";
import bodyParser from "body-parser";
import * as path from "path";

const app = express();
app.use(bodyParser.json());

const tasks = [
    { title: "prepare lecture" },
    { title: "give lecture" }
];

app.get("/api/todos", (req, res) => {
    res.json(tasks)
});

app.post("/api/todos", (req, res) => {
    const {title} = req.body;
    tasks.push({title})
    res.send();
})


app.use(express.static(path.join("..", "client", "dist")));

app.listen(3000);