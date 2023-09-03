import express from "express";

const app = express();
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


app.listen(process.env.PORT || 3000);
