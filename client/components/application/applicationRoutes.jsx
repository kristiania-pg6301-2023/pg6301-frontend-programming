import { Route, Routes } from "react-router-dom";
import { FrontPage } from "./frontPage";
import { MoviesList } from "../movies/moviesList";
import { AddMovieForm } from "../movies/addMovieForm";

export function ApplicationRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />} />
      <Route path={"/movies"} element={<MoviesList />} />
      <Route path={"/movies/new"} element={<AddMovieForm />} />
      <Route path={"*"} element={<h2>Not Found</h2>} />
    </Routes>
  );
}
