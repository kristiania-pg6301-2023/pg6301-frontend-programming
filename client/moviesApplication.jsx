import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

export function ListMovies({ movies }) {
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

export function MoviesRoutes() {
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    const res = await fetch("/api/movies");
    setMovies(await res.json());
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Routes>
      <Route path={"/"} element={<ListMovies movies={movies} />} />
      <Route path={"/movies/new"} element={<AddMovie />} />
      <Route path={"*"} element={<h2>Not Found</h2>} />
    </Routes>
  );
}
