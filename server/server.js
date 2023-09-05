import express from "express";

const app = express();

app.get("/api/todos", (req, res) => {
    res.send([
        {
            title: "implement server",
            status: "doing"
        },
        {
            title: "first version of client",
            status: "done"
        }
    ]);
});


app.listen(3000);