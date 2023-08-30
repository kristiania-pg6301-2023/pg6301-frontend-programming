import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function FrontPage() {
    return <>
        <h2>Welcome to the application</h2>
        <ul>
            <li><Link to="/movies">List the movies</Link></li>
            <li><Link to="/movies/new">Add a movie</Link></li>
        </ul>
    </>;
}

function ListMovies() {
    return <h2>List movies</h2>;
}

function NewMovie() {
    return <h2>Add a movie to the database</h2>;
}

function MoviesRoutes() {
    return <Routes>
        <Route path={"/"} element={<FrontPage/>}/>
        <Route path={"/movies"} element={<ListMovies/>}/>
        <Route path={"/movies/new"} element={<NewMovie/>}/>
        <Route path={"*"} element={<h2>Not found</h2>}/>
    </Routes>;
}

export function MovieApplication() {
    return <BrowserRouter>
        <header>
            <h1>Movie Application</h1>
        </header>
        <nav><Link to="/">Front page</Link></nav>
        <main>
            <MoviesRoutes/>
        </main>
        <footer>Created by Johannes Brodwall 💚</footer>
    </BrowserRouter>;
}