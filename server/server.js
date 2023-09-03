import express from "express";
import bodyParser from "body-parser";
import * as path from "path";

const app = express();
app.use(bodyParser.json());

const tasks = [
    { id: 0, title: "prepare lecture", status: "done" },
    { id: 1, title: "give lecture", status: "doing" }
];

app.get("/api/todos", (req, res) => {
    res.json(tasks)
});

app.post("/api/todos", (req, res) => {
    const {title} = req.body;
    tasks.push({id: tasks.length, title, status: "todo"})
    res.send();
})


app.use(express.static(path.join("..", "client", "dist")));

app.listen(3000);