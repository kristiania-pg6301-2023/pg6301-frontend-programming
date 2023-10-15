import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

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

// For more, see https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming#reading-data-from-mongodb
async function handleMongoDbConnect(connection) {
  const moviesCollection = connection.db("sample_mflix").collection("movies");
  const distinctYearsFromMovies = await moviesCollection.distinct("year", {
    countries: "Norway",
  });
  console.log(distinctYearsFromMovies);
}

if (process.env.MONGODB_URL) {
  new MongoClient(process.env.MONGODB_URL).connect().then(handleMongoDbConnect);
}

app.listen(3000);
