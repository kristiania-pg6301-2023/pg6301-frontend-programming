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
    <form method="dialog">
      <h2>Movies</h2>
      <div>
        Title: <br />
        <input />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export function MoviesRoutes({ fetchMovies }) {
  const [movies, setMovies] = useState([]);

  async function loadMovies() {
    const movies = await fetchMovies();
    setMovies(movies);
  }

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <Routes>
      <Route path={"/"} element={<ListMovies movies={movies} />} />
      <Route path={"/movies/new"} element={<AddMovie />} />
      <Route path={"*"} element={<h2>Not Found</h2>} />
    </Routes>
  );
}
