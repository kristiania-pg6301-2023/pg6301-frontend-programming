import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import "./application.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function ListMovies() {
  const [movies, setMovies] = useState([]);
  async function fetchMovies() {
    const res = await fetch("/api/movies");
    setMovies(await res.json());
  }
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <h2>All movies</h2>
      {movies.map((m) => (
        <div key={m.title}>
          <h3>{m.title}</h3>
        </div>
      ))}
    </>
  );
}

function AddMovie() {
  return (
    <>
      <h2>Movies</h2>
    </>
  );
}

function MoviesRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<ListMovies />} />
      <Route path={"/movies/new"} element={<AddMovie />} />
      <Route path={"*"} element={<h2>Not Found</h2>} />
    </Routes>
  );
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
        <MoviesRoutes />
      </main>
      <footer>Made with 💚 by Johannes</footer>
    </BrowserRouter>
  );
}

root.render(<MoviesApplication />);
