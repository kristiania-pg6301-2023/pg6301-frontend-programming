import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

interface Movie {
  _id: string;
  title: string;
  plot: string;
  year: number;
}

interface MovieParameters {
  countries: string[];
  years: number[];
}

export interface MovieQuery {
  countries?: string;
  year?: number;
}

export function ListMovies({
  movies,
  parameters,
  setQuery,
}: {
  movies: Movie[];
  parameters: MovieParameters;
  query: MovieQuery;
  setQuery: Dispatch<SetStateAction<MovieQuery>>;
}) {
  return (
    <>
      <h2>All movies</h2>
      <div className={"query-filter"}>
        <div>
          <label>
            Country: <br />
            <select
              onChange={(e) =>
                setQuery((old) => ({ ...old, countries: e.target.value }))
              }
            >
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
            <select
              onChange={(e) =>
                setQuery((old) => ({ ...old, year: parseInt(e.target.value) }))
              }
            >
              <option></option>
              {parameters.years.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </label>
        </div>
      </div>
      {movies.map((m) => (
        <div key={m._id}>
          <h3>{m.title}</h3>
          <p>{m.plot}</p>
        </div>
      ))}
    </>
  );
}

function AddMovie({ onCreate }: { onCreate(movie: Omit<Movie, "_id">): void }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [plot, setPlot] = useState("");

  async function handleSubmit() {
    await onCreate({ title, plot, year: parseInt(year) });
  }

  return (
    <form method="dialog" onSubmit={handleSubmit}>
      <h2>Movies</h2>
      <div>
        Title: <br />
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        Year: <br />
        <input value={year} onChange={(e) => setYear(e.target.value)} />
      </div>
      <div>
        Plot: <br />
        <textarea value={plot} onChange={(e) => setPlot(e.target.value)} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export interface MoviesRoutesProps {
  fetchMovies(query: MovieQuery): Promise<Movie[]>;

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
  const [query, setQuery] = useState<MovieQuery>({});
  const [parameters, setParameters] = useState<MovieParameters>({
    countries: [],
    years: [],
  });

  async function loadMovies() {
    setMovies(await fetchMovies(query));
    setParameters(await fetchParameters());
  }

  useEffect(() => {
    loadMovies();
  }, [query]);

  async function handleCreate(movie: Movie) {
    await insertMovie(movie);
    await loadMovies();
    navigate("/");
  }

  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <ListMovies
            movies={movies}
            parameters={parameters}
            query={query}
            setQuery={setQuery}
          />
        }
      />
      <Route
        path={"/movies/new"}
        element={<AddMovie onCreate={handleCreate} />}
      />
      <Route path={"*"} element={<h2>Not Found</h2>} />
    </Routes>
  );
}
