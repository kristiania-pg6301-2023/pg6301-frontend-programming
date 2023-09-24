import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

interface Movie {
  title: string;
}

interface MovieParameters {
  countries: string[];
  years: number[];
}

export function ListMovies({
  movies,
  parameters,
}: {
  movies: Movie[];
  parameters: MovieParameters;
}) {
  return (
    <>
      <h2>All movies</h2>
      <div className={"query-filter"}>
        <div>
          <label>
            Country: <br />
            <select>
              <option></option>
              {parameters.countries.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Year: <br />
            <select>
              <option></option>
              {parameters.years.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </label>
        </div>
      </div>
      {movies.map((m) => (
        <div key={m.title}>
          <h3>{m.title}</h3>
        </div>
      ))}
    </>
  );
}

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

export interface MoviesRoutesProps {
  fetchMovies(): Promise<Movie[]>;

  fetchParameters(): Promise<MovieParameters>;

  insertMovie(movie: Movie): Promise<void>;
}

export function MoviesRoutes({
  fetchMovies,
  fetchParameters,
  insertMovie,
}: MoviesRoutesProps) {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [parameters, setParameters] = useState<MovieParameters>({
    countries: [],
    years: [],
  });

  async function loadMovies() {
    setMovies(await fetchMovies());
    setParameters(await fetchParameters());
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
      <Route
        path={"/"}
        element={<ListMovies movies={movies} parameters={parameters} />}
      />
      <Route
        path={"/movies/new"}
        element={<AddMovie onCreate={handleCreate} />}
      />
      <Route path={"*"} element={<h2>Not Found</h2>} />
    </Routes>
  );
}
