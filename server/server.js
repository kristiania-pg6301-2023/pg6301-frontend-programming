import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(express.static("../client/dist"));

const tasks = [
    {
        title: "Create server", state: "done"
    },
    {
        title: "Prepare lecture", state: "done"
    },
    {
        title: "Do lecture", state: "doing"
    },
    {
        title: "Finish lecture", state: "todo"
    }
];

app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
    const {title} = req.body;
    tasks.push({title, state: "todo"});
    res.send();
});

app.listen(process.env.PORT || 3000);
