import React, {useState} from "react";
import ReactDOM from "react-dom/client";

import "./application.css";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function FrontPage() {
    return <div>
        <h1>Welcome to the Movie Database</h1>
        <div><Link to={"/movies/create"}>Create new movie</Link></div>
        <div><Link to={"/movies"}>List all movies</Link></div>
    </div>
}

function CreateMovie() {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [plot, setPlot] = useState("");

    const movie = { title, year, plot };

    return <div>
        <h1>Add a movie</h1>
        <form>
            <div>
                <label>
                    Title:
                    <br/>
                    <input value={title} onChange={e => setTitle(e.target.value)}/>
                </label>
            </div>
            <div>
                <label>
                    Year:
                    <br/>
                    <input value={year} onChange={e => setYear(e.target.value)}/>
                </label>
            </div>
            <div>
                <label>
                    Plot:
                    <br/>
                    <textarea value={plot} onChange={e => setPlot(e.target.value)}/>
                </label>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
        <pre>{JSON.stringify(movie)}</pre>
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
    return <BrowserRouter>
        <header>Movies for Kristiania</header>
        <nav><Link to={"/"}>Front page</Link></nav>
        <main>
            <Routes>
                <Route path={"/"} element={<FrontPage />}/>
                <Route path={"/movies"} element={<ListMovies />}/>
                <Route path={"/movies/create"} element={<CreateMovie />}/>
                <Route path={"*"} element={<h1>Not found</h1>}/>
            </Routes>
        </main>
        <footer>by Johannes Brodwall</footer>
    </BrowserRouter>;
}

root.render(<Application/>);
