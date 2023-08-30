import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function FrontPage() {
    return <>
        <h2>Welcome to the application</h2>
        <ul>
            <li><a href="#">List the movies</a></li>
            <li><a href="#">Add a movie</a></li>
        </ul>
    </>;
}

function ListMovies() {
    return <h2>List movies</h2>;
}

function NewMovie() {
    return <h2>Add a movie to the database</h2>;
}

function MovieApplication() {
    return <>
        <header>
            <h1>Movie Application</h1>
        </header>
        <nav><a href="#">Front page</a></nav>
        <main>
            <ListMovies />
        </main>
        <footer>Created by Johannes Brodwall 💚</footer>
    </>;
}

root.render(<MovieApplication/>)
