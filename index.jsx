import React from "react";
import ReactDOM from "react-dom";

import "./application.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

function Application() {
    return <>
        <header><h1>Movie Application</h1></header>
        <nav><a href={"#"}>Home page</a></nav>
        <main>
            <h2>Welcome to the front page</h2>
        </main>
        <footer>
            By Johannes Brodwall for Kristiania 2023
        </footer>
    </>;
}

root.render(<Application />);