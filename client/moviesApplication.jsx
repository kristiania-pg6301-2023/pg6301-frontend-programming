import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React from "react";

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

function MoviesRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />} />
      <Route path={"/movies"} element={<h2>Listing of all movies</h2>} />
      <Route path={"/movies/new"} element={<h1>Add movie</h1>} />
      <Route path={"*"} element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export function MoviesApplication() {
  return (
    <>
      <header>
        <h1>Kristiania movies</h1>
      </header>
      <nav>
        <Link to={"/"}>Front page</Link>
      </nav>
      <main>
        <MoviesRoutes />
      </main>
      <footer>By Johannes Brodwall with 💚</footer>
    </>
  );
}
