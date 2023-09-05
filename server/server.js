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
        }
    ]);
});

app.use(express.static("../client/dist"));


app.listen(3000);