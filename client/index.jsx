import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import {HashRouter, NavLink, Route, Routes} from "react-router-dom";

import "./application.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

function FrontPage() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks([
            {
                title: "Prepare lecture", state: "done"
            },
            {
                title: "Do lecture", state: "doing"
            },
            {
                title: "Finish lecture", state: "todo"
            }
        ])
    }, []);


    return <>
        <h2>Front page</h2>
        {tasks.map(task => <div key={task.title}><h3>{task.title}</h3></div>)}
    </>;
}

function TasksRoutes() {
    return <Routes>
        <Route path={"/"} element={<FrontPage/>}/>
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