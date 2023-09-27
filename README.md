Excecise 7: Storing data in MongoDB with Atlas
==============================================

In this exercise, you should build a React client and Express server on top of MongoDB's example Movies database. This
exercise repeats the contents of the lecture.

If you have used the previous lectures as a exercise, you may use that as a starting point. Otherwise, you will have to
start from the beginning. You should have completed the exercise from lecture 3 before you begin.

## Set up access to MongoDB Atlas

1. Sign up with MongoDB Atlas
2. Create an organization (can be your name) and a project (exercise06)
3. Select "Create a deployment" to create a database
   * **Make sure you select M0** to avoid having to pay for hosting
4. Add a user and your local IP-address (NB: You will need to allow access from Cloud Environment to use with Heroku
5. When the database is created, you can "Load Sample Data" to add a useful example dataset
6. When the sample data is loaded, Browse collections and go to `sample_mflix` -> `movies`
7. Download [Compass](https://www.mongodb.com/docs/compass/current/). In the web page, you can find instructions for
   installing and connecting to Atlas with Compass. If you have forgotten the password, you can generate a new one on
   the web page under Security > Database Access > Edit
8. Explore the `sample_mflix` database in Compass

## Create an Express dummy API

Create an Express application similarly to how we have done before:

1. `mkdir server`
2. `cd server`
3. `npm init -y`
4. `npm install express`
5. `npm install --save-dev nodemon`
6. `npm pkg set scripts.dev="nodemon server.js"`
7. `npm pkg set type="module"`

Create a simple `server.js` which shows some sample data:

```js
import express from "express";

const moviesApi = express.Router();
moviesApi.get("", (req, res) => {
   res.json([
      {title: "movie 1"},
      {title: "movie 2"},
   ]);
});

const app = express();
app.use("/api/movies", moviesApi);
app.listen(3000);
```

Run the server with `npm run dev` and access it by going to http://localhost:3000/api/movies

## Give the API access to the Mongo database

`npm install mongodb`

Update the moviesApi to get movies from MongoDB:

```js
import {MongoClient} from "mongodb";
// ...

const client = new MongoClient(mongoDbUrl);
client.connect()
  .then((connection) => {
     const database = connection.db("sample_mflix");

     moviesApi.get("", async (req, res) => {
        const movies = await database
                .collection("movies")
                .find({year: 2013})
                .limit(20)
                .toArray();
        res.json(movies);
     });
  })
  .catch((error) => {
     console.error("while connecting to MongoDB", error);
  });
```

Check that you get 20 movies for 2013 when you go to http://localhost:3000

## Treat the password with care!

Create a new file named `.env` with the following line:

```env
ATLAS_URL=<your mongo db URL, including password>
```

**Make sure to add `.env` to `.gitignore`. This is a very secret file!

To use the environment file in your code:

1. `npm install dotenv`
2. In `server.js` add the following
   ```js
   import dotenv from "dotenv";

   dotenv.config();
   ```

To set up the environment variable in HEROKU, you need to go to https://dashboard.heroku.com, go to your app >
Settings > Reveal Config Vars

## Tasks

1. Try to add different filtering and sorting options. For example - list all movies from a country sorted by the most
   popular
2. Limit the fields returned from the database to the server and thus to the client
3. Let the use specify filter values, for example by year, country or cast
4. Let the user specify multiple countries
5. Show the available options for years and countries in the in drop down lists
6. Update POST /api/movies so that new movies are stored in MongoDB
7. Create or update supertest tests that store data to MongoDB
8. Deploy your code to Heroku - this requires you to set up security:
   * In Heroku: Update the ATLAS_URL under your app Settings as a Config Var
   * In MongoDB: Update Security > Network Access to allow all IP addresses

