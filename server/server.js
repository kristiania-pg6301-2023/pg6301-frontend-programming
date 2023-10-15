import express from "express";
import * as path from "path";

const app = express();
app.use(express.static("../client/dist"));

/*
The following code will fix 404 errors when refreshing with <BrowserRouter />
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});
 */

app.listen(3000);
