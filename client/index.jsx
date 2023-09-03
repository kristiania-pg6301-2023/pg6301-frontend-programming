import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function ListMovies() {
    return <>
        <h2>Movies</h2>
        </>;
}

function AddMovie() {
    return <>
        <h2>Movies</h2>
    </>;
}

function MoviesRoutes() {
    return <Routes>
        <Route path={"/"} element={<ListMovies />} />
        <Route path={"/movies/new"} element={<AddMovie />} />
        <Route path={"*"} element={<h2>Not Found</h2>} />
    </Routes>;
}

function MoviesApplication() {
    return <BrowserRouter>
        <header><h1>Movies Database</h1></header>
        <nav><Link to={"/"}>List movies</Link><Link to={"/movies/new"}>Add movie</Link><div className={"spacer"} /><Link to={"/login"}>User profile</Link></nav>
        <main>
            <MoviesRoutes />
        </main>
        <footer>Made with 💚 by Johannes</footer>
    </BrowserRouter>;
}

root.render(<MoviesApplication/>)