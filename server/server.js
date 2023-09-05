import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const tasks = [
    {
        title: "implement first version of server",
        status: "done"
    },
    {
        title: "first version of client",
        status: "done"
    },
    {
        title: "Better dev ex with client and server",
        status: "doing"
    }
]

app.get("/api/todos", (req, res) => {
    res.send(tasks);
});

app.post("/api/todos", (req, res) => {
    const {title} = req.body;
    const newTask = {title, status: "todo"};
    tasks.push(newTask);
    res.send();
});

app.use(express.static("../client/dist"));


app.listen(3000);