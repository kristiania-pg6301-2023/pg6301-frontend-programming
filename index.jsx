import React from "react";
import ReactDOM from "react-dom/client";

import "./application.css"
import {HashRouter, Link, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function FrontPage() {
    return <>
        <h2>Welcome to the Movie application</h2>
        <ul>
            <li><Link to={"/movies"}>List movies</Link></li>
            <li><Link to={"/movies/new"}>Create new movie</Link></li>
        </ul>
    </>;
}

function ListMovies() {
    const movies = [
        {title: "Movie1", year: 2019},
        {title: "Movie2", year: 2009},
    ];

    return <>
        <h2>All the movies</h2>
        {movies.map(
            movie => <div key={movie.title}>{movie.title} ({movie.year})</div>
        )}
    </>
}

function CreateMovie() {
    return <>
        <h2>Create new movie</h2>
        <form>
            <div>
                <label>
                    Title:
                    <br/>
                    <input/>
                </label>
            </div>
            <div>
                <label>
                    Year:
                    <br/>
                    <input/>
                </label>
            </div>
            <div>
                <label>
                    Plot:
                    <br/>
                    <textarea/>
                </label>
            </div>
            <button>Submit</button>
        </form>
    </>
}


function Application() {
    return <HashRouter>
        <header><h1>Movie Application</h1></header>
        <nav><Link to={"/"}>Home page</Link></nav>
        <main>
            <Routes>
                <Route path={"/"} element={<FrontPage />} />
                <Route path={"/movies/new"} element={<CreateMovie />} />
                <Route path={"/movies"} element={<ListMovies />} />
                <Route path={"*"} element={<h2>Not found</h2>} />
            </Routes>
        </main>
        <footer>
            By Johannes Brodwall for Kristiania 2023
        </footer>
    </HashRouter>;
}

root.render(<Application/>);