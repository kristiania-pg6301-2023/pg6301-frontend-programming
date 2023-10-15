import { Route, Routes } from "react-router-dom";
import { FrontPage } from "./frontPage";
import { MoviesList } from "../movies/moviesList";
import { AddMovieForm } from "../movies/addMovieForm";
import { useEffect, useState } from "react";

const MOVIES = [
  {
    _id: "1",
    title: "Barbie",
    year: 2023,
    countries: ["USA"],
  },
  {
    _id: "2",
    title: "Oppenheimer",
    year: 2023,
    countries: ["USA"],
  },
];

export function ApplicationRoutes() {
  const [movies, setMovies] = useState([]);

  async function loadMovies() {
    setMovies(MOVIES);
  }

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />} />
      <Route path={"/movies"} element={<MoviesList movies={movies} />} />
      <Route path={"/movies/new"} element={<AddMovieForm />} />
      <Route path={"*"} element={<h2>Not Found</h2>} />
    </Routes>
  );
}
