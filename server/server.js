import express from "express";

const app = express();

app.get("/api/tasks", (req, res) => {
    res.json([
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
    ])
})


app.listen(3000);
