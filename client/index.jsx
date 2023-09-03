import React from "react";
import ReactDOM from "react-dom/client";
import {HashRouter, NavLink, Route, Routes} from "react-router-dom";

import "./application.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

function TasksRoutes() {
    return <Routes>
        <Route path={"/"} element={<h2>Front page</h2>}/>
        <Route path={"/tasks/new"} element={<h2>Add task</h2>}/>
        <Route path={"*"} element={<h2>Not found</h2>}/>
    </Routes>;
}

function TaskApplication() {
    return <HashRouter>
        <header><h1>Task application</h1></header>
        <nav><NavLink to={"/"}>Front page</NavLink></nav>
        <main>
            <TasksRoutes/>
        </main>
        <footer>Create by Johannes @ Kristiania</footer>
    </HashRouter>;
}

root.render(<TaskApplication/>)