import express from "express";

const app = express();

app.get("/api/todos", (req, res) => {
    res.json([
        { title: "prepare lecture" },
        { title: "give lecture" },
    ])
})


app.use(express.static("public"));

app.listen(3000);