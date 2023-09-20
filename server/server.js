import express from "express";

const app = express();

const TASKS = [
    {
        title: "prepare lecture",
        status: "done"
    },
    {
        title: "give lecture",
        status: "doing"
    },
    {
        title: "deploy to heroku",
        status: "todo"
    }
];

app.get("/api/tasks", (req, res) => {
    res.json(TASKS)
})
app.put("/api/tasks", (req, res) => {
    for (const task of TASKS) {
        task.title = "Updated";
    }
    res.end();
})


app.use(express.static("../client/dist"));


app.listen(process.env.PORT || 3000);
