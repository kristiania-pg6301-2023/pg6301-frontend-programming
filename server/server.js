import express from "express";

const openid_configuration =
  "https://accounts.google.com/.well-known/openid-configuration";
const client_id =  "34816606807-c674fr663n4s8lqjmtr5i444qnosva3b.apps.googleusercontent.com";

const app = express();

app.use(express.static("../client/dist/"));

app.get("/api/config", (req, res) => {
  const user = req.user;
  res.send({ user, openid_configuration, client_id });
});

app.listen(3000);
