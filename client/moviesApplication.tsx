import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { rootLogger } from "ts-jest";

interface Movie {
  _id: string;
  title: string;
  plot: string;
}

interface MovieParameters {
  countries: string[];
  years: number[];
}

interface MovieQuery {
  countries?: string;
  year?: number;
}

export function ListMovies({
  movies,
  parameters,
  query,
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
      <pre>{JSON.stringify(query)}</pre>
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
                <option onChange={(e) => console.log("onChange", c)} key={c}>
                  {c}
                </option>
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
  const [plot, setPlot] = useState("");

  async function handleSubmit() {
    await onCreate({ title, plot });
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
  const [query, setQuery] = useState<MovieQuery>({});
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
