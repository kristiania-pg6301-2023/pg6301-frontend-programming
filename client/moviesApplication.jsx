import { BrowserRouter, Link } from "react-router-dom";
import React from "react";

export function MoviesApplication() {
  return (
    <BrowserRouter>
      <header>
        <h1>Kristiania movies</h1>
      </header>
      <nav>
        <Link to={"/"}>Front page</Link>
      </nav>
      <main>
        <ul>
          <li>
            <Link to={"/movies"}>List movies</Link>
          </li>
          <li>
            <Link to={"/movies/new"}>Add a movie</Link>
          </li>
        </ul>
      </main>
      <footer>By Johannes Brodwall with 💚</footer>
    </BrowserRouter>
  );
}
