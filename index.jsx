import React from "react";
import ReactDOM from "react-dom/client";

import "./application.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

function FrontPage() {
    return <>
        <h2>Welcome to the Movie application</h2>
        <ul>
            <li><a href="#">List movies</a></li>
            <li><a href="#">Create new movie</a></li>
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
    return <>
        <header><h1>Movie Application</h1></header>
        <nav><a href={"#"}>Home page</a></nav>
        <main>
            <FrontPage/>
        </main>
        <footer>
            By Johannes Brodwall for Kristiania 2023
        </footer>
    </>;
}

root.render(<Application/>);