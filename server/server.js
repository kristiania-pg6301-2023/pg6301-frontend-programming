import express from "express";
import * as path from "path";

const app = express();

app.use(express.static("../client/dist"));
app.use((req, res, next) => {
  res.sendFile(path.resolve("../client/dist/index.html"));
});

app.listen(3000);
