import React, {useEffect, useState} from "react";
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

function MovieListing({movie: {title, year}}) {
    return <div>{title} ({year})</div>;
}

function ListMovies({movies}) {
    return <>
        <h2>List movies</h2>
        {movies.map(movie => <MovieListing
            key={movie.title}
            movie={movie}
        />)}
    </>;
}

function NewMovie() {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [plot, setPlot] = useState("");
    const newMovie = {title, year, plot};

    return <form>
        <h2>Add a movie to the database</h2>
        <div>
            Title:<br/>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div>
            Year:<br/>
            <input type="text" value={year} onChange={e => setYear(e.target.value)}/>
        </div>
        <div>
            Plot:<br/>
            <textarea value={plot} onChange={e => setPlot(e.target.value)} />
        </div>
        <button>Submit</button>
        <pre>
            {JSON.stringify(newMovie, null, "  ")}
        </pre>
    </form>;
}

function MoviesRoutes() {
    const movies = [
        {
            title: "Oppenheimer",
            year: "2023"
        },
        {
            title: "Barbie",
            year: "2023"
        },
    ]


    return <Routes>
        <Route path={"/"} element={<FrontPage/>}/>
        <Route
            path={"/movies"}
            element={<ListMovies movies={movies}/>}
        />
        <Route
            path={"/movies/new"}
            element={<NewMovie/>}
        />
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