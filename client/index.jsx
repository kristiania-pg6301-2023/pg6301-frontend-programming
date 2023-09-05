import React, {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function AddTaskButton() {
    const dialogRef = useRef();
    const [taskTitle, setTaskTitle] = useState("");

    function handleClick() {
        dialogRef.current.showModal();
    }

    function handleCancel() {
        dialogRef.current.close();
    }

    async function handleSubmit() {
        await fetch("/api/todos", {
            method: "POST",
            body: JSON.stringify({title: taskTitle}),
            headers: {
                "content-type": "application/json"
            }
        })
    }

    return <>
        <dialog ref={dialogRef}>
            <form method={"dialog"}>
                <h2>Add a new task</h2>
                <div>
                    Task title:<br />
                    <input
                        value={taskTitle}
                        onChange={e => setTaskTitle(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                <div>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </dialog>
        <button onClick={handleClick}>Add new task</button>
    </>;
}

function TaskApplication() {
    const [tasks, setTasks] = useState();
    useEffect(() => {
        loadTasks();
    }, []);

    async function loadTasks() {
        const res = await fetch("/api/todos")
        setTasks(await res.json());
    }


    return <>
        <h1>The task application</h1>
        <AddTaskButton/>
        {tasks && tasks.map(t => <div>
            <h3>{t.title} ({t.status})</h3>
        </div>)}
        {!tasks && <div>Loading...</div>}
    </>;
}

root.render(<TaskApplication/>)