import React from "react";
import ReactDOM from "react-dom/client";

import "./application.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function FrontPage() {
    return <div>
        <h1>Welcome to the Movie Database</h1>
        <div><a href="#">Create new movie</a></div>
        <div><a href="#">List all movies</a></div>
    </div>
}

function CreateMovie() {
    return <div>
        <h1>Add a movie</h1>
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
                    <textarea />
                </label>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
}

function ListMovies() {
    const movies = [
        {title: "Oppenheimer", year: 2023, plot: "boom!"},
        {title: "Barbie", year: 2023, plot: "plastic!"},
    ];
    return <>
        <h1>Current movies</h1>
        {movies.map(m => <div key={m.title}>{m.title} ({m.year})</div>)}
    </>
}

function Application() {
    return <>
        <header>Movies for Kristiania</header>
        <nav><a href="#">Front page</a></nav>
        <main><FrontPage /></main>
        <footer>by Johannes Brodwall</footer>
    </>;
}

root.render(<Application/>);
