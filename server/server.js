import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const tasks = [
    {
        id: 0,
        title: "implement first version of server",
        status: "done"
    },
    {
        id: 1,
        title: "first version of client",
        status: "done"
    },
    {
        id: 2,
        title: "Better dev ex with client and server",
        status: "doing"
    }
]

app.get("/api/todos", (req, res) => {
    res.send(tasks);
});

app.post("/api/todos", (req, res) => {
    const {title} = req.body;
    const newTask = {title, status: "todo", id: tasks.length};
    tasks.push(newTask);
    res.send();
});

app.put("/api/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    tasks.find(t => t.id === id).status = req.body.status;
    res.send();
})

app.use(express.static("../client/dist"));


app.listen(3000);