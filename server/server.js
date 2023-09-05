import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log("Request logging by johannes", req.url);
    req.brukernavn = "pg6301-student"
    next();
})

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
    console.log(req.brukernavn);
    res.send(tasks);
});
app.post("/api/todos", (req, res) => {
    const {title} = req.body;
    console.log("body", req.body);
    const newTask = {title, status: "todo"};
    tasks.push(newTask);
});

app.use(express.static("../client/dist"));


app.listen(3000);