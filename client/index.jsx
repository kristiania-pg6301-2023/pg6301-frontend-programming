import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

import "./application.css"
import {HashRouter, Link, Route, Routes, useNavigate} from "react-router-dom";

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

function ListMovies({movies}) {

    return <>
        <h2>All the movies</h2>
        {movies.map(
            movie => <div key={movie.title}>{movie.title} ({movie.year})</div>
        )}
    </>
}

function CreateMovie({onCreateMovie}) {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [plot, setPlot] = useState("");

    const navigate = useNavigate();

    const movie = {title, year, plot};

    function handleSubmitMovie(e) {
        e.preventDefault();
        onCreateMovie(movie);
        navigate("/movies");
    }


    return <>
        <h2>Create new movie</h2>
        <form onSubmit={handleSubmitMovie}>
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
            <button>Submit</button>
            <pre>{JSON.stringify(movie, null, "  ")}</pre>
        </form>
    </>
}


function Application() {
    const [movies, setMovies] = useState([]);

    useEffect(async () => {
        const res = await fetch("/api/movies");
        setMovies(await res.json());
    }, [])

    function handleCreateMovie(movie) {
        //setMovies(old => ([...old, movie]));
    }

    return <HashRouter>
        <header><h1>Movie Application with API</h1></header>
        <nav><Link to={"/"}>Home page</Link></nav>
        <main>
            <Routes>
                <Route path={"/"} element={<FrontPage />} />
                <Route path={"/movies/new"} element={
                    <CreateMovie onCreateMovie={handleCreateMovie} />
                } />
                <Route path={"/movies"} element={
                    <ListMovies movies={movies} />
                } />
                <Route path={"*"} element={<h2>Not found</h2>} />
            </Routes>
        </main>
        <footer>
            By Johannes Brodwall for Kristiania 2023
        </footer>
    </HashRouter>;
}

root.render(<Application/>);