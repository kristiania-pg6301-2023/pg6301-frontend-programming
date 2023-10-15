import express from "express";

const app = express();

const loginRouter = express.Router();

loginRouter.get("", (req, res) => {
  res.send({
    username: "Johannes from server",
  });
});

app.use("/api/login", loginRouter);

app.use(express.static("../client/dist"));
app.listen(3000);
