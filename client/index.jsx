import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import {HashRouter, Link, NavLink, Route, Routes, useNavigate} from "react-router-dom";

import "./application.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

function FrontPage() {
    const [tasks, setTasks] = useState([]);

    async function fetchTasks() {
        const res = await fetch("/api/tasks");
        setTasks(await res.json());
    }

    useEffect(() => {
        fetchTasks();
    }, []);


    return <>
        <h2>Front page</h2>
        <div><Link to={"/tasks/new"}>Add task</Link></div>
        {tasks.map(task => <div key={task.title}><h3>{task.title}</h3></div>)}
    </>;
}

function AddTask() {
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    async function handleSubmit() {
        const res = await fetch("/api/tasks", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({title})
        });
        navigate("/");
    }


    return <form method={"dialog"} onSubmit={handleSubmit}>
        <h2>Add task</h2>
        <div>
            Title:<br />
            <input name="title" autoFocus={true} value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <button>
            Submit
        </button>
    </form>;
}

function TasksRoutes() {
    return <Routes>
        <Route path={"/"} element={<FrontPage/>}/>
        <Route path={"/tasks/new"} element={<AddTask/>}/>
        <Route path={"*"} element={<h2>Not found</h2>}/>
    </Routes>;
}

function TaskApplication() {
    return <HashRouter>
        <header><h1>The task application</h1></header>
        <nav><NavLink to={"/"}>Front page</NavLink></nav>
        <main>
            <TasksRoutes/>
        </main>
        <footer>Create by Johannes @ Kristiania</footer>
    </HashRouter>;
}

root.render(<TaskApplication/>)