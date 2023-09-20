import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function TaskApplication() {
    const [tasks, setTasks] = useState([]);

    async function loadTasks() {
        const res = await fetch("/api/tasks");
        setTasks(await res.json());
    }

    useEffect(() => {
        loadTasks();
    }, []);


    return <>
        <h1>Kristiania React Task Application on Heroku</h1>
        {tasks.map(t => <div>{t.title}</div>)}
    </>;
}

root.render(<TaskApplication/>)