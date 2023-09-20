import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function TaskListEntry({task}) {
    const [title, setTitle] = useState(task.title);
    async function handleUpdate() {
        await fetch("/api/tasks", {
            method: "PUT",
            body: JSON.stringify({ title }),
            headers: {
                "content-type": "application/json"
            }
        });

    }

    return <p>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <br/>
        <button onClick={handleUpdate}>Update</button>
    </p>;
}

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
        {tasks.map(t => <TaskListEntry task={t} />)}
    </>;
}

root.render(<TaskApplication/>)