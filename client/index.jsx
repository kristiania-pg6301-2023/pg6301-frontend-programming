import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

import "./application.css";
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function FrontPage() {
    return <div>
        <h1>Welcome to the Kristiania Movie Database</h1>
        <div><Link to={"/movies/create"}>Create new movie</Link></div>
        <div><Link to={"/movies"}>List all movies</Link></div>
    </div>
}

function CreateMovie({onAddMovie}) {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [plot, setPlot] = useState("");

    const movie = { title, year, plot };

    function handleSubmit(e) {
        e.preventDefault();
        onAddMovie(movie);
        navigate("/movies");
    }


    return <div>
        <h1>Add a movie</h1>
        <form onSubmit={handleSubmit}>
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

function ListMovies({movies}) {
    return <>
        <h1>Current movies</h1>
        {movies.map(m => <div key={m.title}>{m.title} ({m.year})</div>)}
    </>
}

function Application() {
    const [movies, setMovies] = useState([]);

    async function loadMovies() {
        const res = await fetch("/api/movies");
        setMovies(await res.json());
    }

    useEffect(() => {
        loadMovies()
    }, []);

    async function handleAddMovie(movie) {
        await fetch("/api/movies", {
            method: "POST",
            body: JSON.stringify(movie),
            headers: {
                "Content-Type": "application/json"
            }
        });
        await loadMovies();
    }
    return <BrowserRouter>
        <header>Movies for Kristiania</header>
        <nav><Link to={"/"}>Front page</Link></nav>
        <main>
            <Routes>
                <Route path={"/"} element={<FrontPage />}/>
                <Route path={"/movies"} element={<ListMovies movies={movies} />}/>
                <Route path={"/movies/create"} element={<CreateMovie onAddMovie={handleAddMovie} />}/>
                <Route path={"*"} element={<h1>Not found</h1>}/>
            </Routes>
        </main>
        <footer>by Johannes Brodwall</footer>
    </BrowserRouter>;
}

root.render(<Application/>);
