import React from "react";
import ReactDOM from "react-dom/client";
import { MoviesApplication } from "./moviesApplication";

import "./application.css";
import { HashRouter } from "react-router-dom";

async function fetchMovies() {
  const res = await fetch("/api/movies");
  return await res.json();
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <HashRouter>
    <MoviesApplication fetchMovies={fetchMovies} />
  </HashRouter>,
);
