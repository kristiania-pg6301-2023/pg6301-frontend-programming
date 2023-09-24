import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, NavLink } from "react-router-dom";

import "./application.css";
import { MovieQuery, MoviesRoutes } from "./moviesApplication";

const root = ReactDOM.createRoot(document.getElementById("root")!);

async function fetchMovies(query: MovieQuery) {
  const searchParams = new URLSearchParams();
  query.countries && searchParams.set("countries", query.countries);
  query.year && searchParams.set("year", query.year.toString());

  const res = await fetch("/api/movies?" + searchParams);
  return await res.json();
}

async function fetchParameters() {
  const res = await fetch("/api/movies/parameters");
  return await res.json();
}

async function insertMovie(movie: unknown) {
  await fetch("/api/movies", {
    method: "POST",
    body: JSON.stringify(movie),
    headers: {
      "content-type": "application/json",
    },
  });
}

function MoviesApplication() {
  return (
    <BrowserRouter>
      <header>
        <h1>Movies Database</h1>
      </header>
      <nav>
        <NavLink to={"/"}>List movies</NavLink>
        <NavLink to={"/movies/new"}>Add movie</NavLink>
        <div className={"spacer"} />
        <NavLink to={"/login"}>User profile</NavLink>
      </nav>
      <main>
        <MoviesRoutes
          fetchMovies={fetchMovies}
          fetchParameters={fetchParameters}
          insertMovie={insertMovie}
        />
      </main>
      <footer>Made with 💚 by Johannes</footer>
    </BrowserRouter>
  );
}

root.render(<MoviesApplication />);
