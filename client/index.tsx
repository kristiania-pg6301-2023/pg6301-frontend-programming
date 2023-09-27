import React from "react";
import ReactDOM from "react-dom/client";
import { MoviesApplication, MoviesContext } from "./moviesApplication";

import "./application.css";
import { HashRouter } from "react-router-dom";

async function fetchMovies() {
  const res = await fetch("/api/movies");
  return await res.json();
}

async function postNewMovie(newMovie: unknown) {
  await fetch("/api/movies", {
    method: "POST",
    body: JSON.stringify(newMovie),
    headers: {
      "content-type": "application/json",
    },
  });
}

const root = ReactDOM.createRoot(document.getElementById("app")!);
root.render(
  <HashRouter>
    <MoviesContext.Provider value={{ postNewMovie }}>
      <MoviesApplication fetchMovies={fetchMovies} />
    </MoviesContext.Provider>
  </HashRouter>,
);
