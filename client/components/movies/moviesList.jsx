import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "./moviesContext";

export function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const { fetchMovies } = useContext(MoviesContext);

  async function loadMovies() {
    setLoading(true);
    setMovies(await fetchMovies());
    setLoading(false);
  }

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <>
      <h2>List the movies</h2>
      {loading && <div>Spinner</div>}
      {movies.map((m) => (
        <div key={m._id}>{m.title}</div>
      ))}
    </>
  );
}
