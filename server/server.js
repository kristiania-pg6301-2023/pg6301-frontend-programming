import express from "express";

const app = express();

app.use(express.static("../client/dist/"));

app.get("/api/config", (req, res) => {
  const user = req.user;
  res.send({user})
})


app.listen(3000);