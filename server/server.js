import express from "express";

const app = express();

app.get("/api/todos", (req, res) => {
    res.send([
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
    ]);
});

app.use(express.static("../client/dist"));


app.listen(3000);