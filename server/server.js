import express from "express";
import bodyParser from "body-parser";
import * as path from "path";

const app = express();
app.use(bodyParser.json());

let tasks = [
    {id: 0, title: "prepare lecture", status: "done"},
    {id: 1, title: "give lecture", status: "doing"}
];

app.get("/api/todos", (req, res) => {
    res.json(tasks)
});

app.post("/api/todos", (req, res) => {
    const {title} = req.body;
    tasks.push({id: tasks.length, title, status: "todo"})
    res.send();
})

app.put("/api/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const {status} = req.body;
    tasks = tasks.map(t => {
        return t.id === id ? {...t, status: status} : t
    });
    res.send();
});


app.use(express.static(path.join("..", "client", "dist")));

app.listen(3000);