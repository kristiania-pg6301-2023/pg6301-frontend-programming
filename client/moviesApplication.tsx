import { Link, Route, Routes } from "react-router-dom";
import React, { FormEvent, useContext, useEffect, useState } from "react";

export const MoviesContext = React.createContext({
  postNewMovie: (movie: Omit<Movie, "_id">) => {},
});

function FrontPage() {
  return (
    <ul>
      <li>
        <Link to={"/movies"}>List movies</Link>
      </li>
      <li>
        <Link to={"/movies/new"}>Add a movie</Link>
      </li>
    </ul>
  );
}

interface Movie {
  _id: number;
  title: string;
  year?: number;
  plot?: string;
  metacritic?: number;
}

interface MoviesProps {
  fetchMovies(): Promise<Array<Movie>>;
}

function MovieEntry({ movie }: { movie: Movie }) {
  return (
    <div className={"movie"}>
      <h3>
        {movie.title} ({movie.year} meta critic score: {movie.metacritic})
      </h3>
      <p>{movie.plot}</p>
    </div>
  );
}

function MoviesList({ fetchMovies }: MoviesProps) {
  const [movies, setMovies] = useState<Movie[]>([]);

  async function loadMovies() {
    setMovies(await fetchMovies());
  }
  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <>
      <h2>Listing of all movies</h2>
      {movies.map((m) => (
        <MovieEntry key={m._id} movie={m} />
      ))}
    </>
  );
}

function AddMovieForm() {
  const { postNewMovie } = useContext(MoviesContext);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    postNewMovie({ title });
  }
  const [title, setTitle] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add movie</h2>
      <div>
        <label>
          Title <br />
          <input
            autoFocus={true}
            name={"title"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
}

function MoviesRoutes({ fetchMovies }: MoviesProps) {
  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />} />
      <Route
        path={"/movies"}
        element={<MoviesList fetchMovies={fetchMovies} />}
      />
      <Route path={"/movies/new"} element={<AddMovieForm />} />
      <Route path={"*"} element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export function MoviesApplication({ fetchMovies }: MoviesProps) {
  return (
    <>
      <header>
        <h1>Kristiania movies</h1>
      </header>
      <nav>
        <Link to={"/"}>Front page</Link>
      </nav>
      <main>
        <MoviesRoutes fetchMovies={fetchMovies} />
      </main>
      <footer>By Johannes Brodwall with 💚</footer>
    </>
  );
}
