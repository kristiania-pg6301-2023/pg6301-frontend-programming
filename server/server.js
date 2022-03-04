import express from "express";

const app = express();

app.use(express.static("../client/dist/"));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
});
