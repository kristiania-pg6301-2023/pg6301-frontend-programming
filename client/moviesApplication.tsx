import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Route, Routes, useNavigate } from "react-router-dom";

interface Movie {
  title: string;
}

export function ListMovies({ movies }: { movies: Movie[] }) {
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
ListMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function AddMovie({ onCreate }: { onCreate(movie: Movie): void }) {
  const [title, setTitle] = useState("");
  async function handleSubmit() {
    await onCreate({ title });
  }
  return (
    <form method="dialog" onSubmit={handleSubmit}>
      <h2>Movies</h2>
      <div>
        Title: <br />
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
AddMovie.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export interface MoviesRoutesProps {
  fetchMovies(): Promise<Movie[]>;
  insertMovie(movie: Movie): Promise<void>;
}

export function MoviesRoutes({ fetchMovies, insertMovie }: MoviesRoutesProps) {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<Movie[]>([]);

  async function loadMovies() {
    const movies = await fetchMovies();
    setMovies(movies);
  }

  useEffect(() => {
    loadMovies();
  }, []);

  async function handleCreate(movie: Movie) {
    await insertMovie(movie);
    await loadMovies();
    navigate("/");
  }

  return (
    <Routes>
      <Route path={"/"} element={<ListMovies movies={movies} />} />
      <Route
        path={"/movies/new"}
        element={<AddMovie onCreate={handleCreate} />}
      />
      <Route path={"*"} element={<h2>Not Found</h2>} />
    </Routes>
  );
}
MoviesRoutes.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  insertMovie: PropTypes.func.isRequired,
};
