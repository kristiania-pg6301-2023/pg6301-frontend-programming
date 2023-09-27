import { Link, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

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
  title: string;
  id: number;
}

interface MoviesProps {
  fetchMovies(): Promise<Array<Movie>>;
}

function Movies({ fetchMovies }: MoviesProps) {
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
        <div key={m.id}>{m.title}</div>
      ))}
    </>
  );
}

function MoviesRoutes({ fetchMovies }: MoviesProps) {
  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />} />
      <Route path={"/movies"} element={<Movies fetchMovies={fetchMovies} />} />
      <Route path={"/movies/new"} element={<h1>Add movie</h1>} />
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
