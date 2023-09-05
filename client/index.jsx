import React, {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function AddTaskButton({reload}) {
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
        reload();
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

function TaskListEntry({task, reload}) {
    async function handleStartTask() {
        await fetch(`/api/todos/${task.id}`, {
            method: "PUT",
            body: JSON.stringify({status: "doing"}),
            headers: {
                "content-type": "application/json"
            }
        })
        reload();
    }

    return <div>
        <h3>{task.title} ({task.status}): ID: {task.id}</h3>
        {task.status === "todo" && <button onClick={handleStartTask}>Start task</button>}
    </div>;
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
        <AddTaskButton reload={loadTasks}/>
        {tasks && tasks.map(t => <TaskListEntry task={t} />)}
        {!tasks && <div>Loading...</div>}
    </>;
}

root.render(<TaskApplication/>)