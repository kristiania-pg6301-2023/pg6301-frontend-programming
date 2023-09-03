import React, {useEffect, useRef, useState} from "react";

function ListTasks({tasks, onRefresh}) {
    if (!tasks) {
        return <div>Loading ...</div>;
    }

    return <>
        {tasks.map(t => <TodoListItem key={t.id} task={t} onRefresh={onRefresh} />)}
    </>;
}

function TodoListItem({task: {id, status, title}, onRefresh}) {
    const [error, setError] = useState();
    async function updateStatus(id, newStatus) {
        setError(undefined);
        const res = await fetch(`/api/todos/${id}`, {
            method: "PUT",
            body: JSON.stringify({status: newStatus}),
            headers: {
                "content-type": "application/json"
            }
        });
        if (!res.ok) {
            setError(res.statusText);
        } else {
            onRefresh();
        }
    }

    return <div>
        {title} ({status})
        {status === "todo" && <button onClick={() => updateStatus(id, "doing")}>start</button>}
        {status === "doing" && <button onClick={() => updateStatus(id, "done")}>complete</button>}
        {error && <div>Error: {error}</div>}
    </div>
}



function AddTaskButton({onRefresh}) {
    const dialogRef = useRef();
    const [showDialog, setShowDialog] = useState(false);
    useEffect(() => {
        if (showDialog) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [showDialog]);
    const [title, setTitle] = useState("");
    const [error, setError] = useState();

    async function handleSubmit(e) {
        e.preventDefault();
        setError(undefined);
        const result = await fetch("/api/todos", {
            method: "POST",
            body: JSON.stringify({title}),
            headers: {
                "content-type": "application/json"
            }
        })
        if (!result.ok) {
            setError(result.statusText)
            return false;
        } else {
            setShowDialog(false);
            onRefresh();
        }
    }

    return <>
        <dialog ref={dialogRef}>
            <h2>Add task</h2>
            <form onSubmit={handleSubmit}>
                {error && <div>An error occurred: {error.toString()}</div>}
                <div>
                    Title <br/>
                    <input autoFocus={true} value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div>
                    <button>Submit</button>
                    <button onClick={() => setShowDialog(false)}>Close</button>
                </div>
            </form>
        </dialog>
        <button onClick={() => setShowDialog(true)}>Add task</button>
    </>;
}


export function TodoApplication() {
    const [tasks, setTasks] = useState(undefined);
    async function fetchTasks() {
        setTasks(undefined);
        const res = await fetch("/api/todos");
        setTasks(await res.json());
    }

    useEffect(() => {
        fetchTasks();
    }, [])

    return <>
        <h1>Welcome to task application</h1>

        <h2>Tasks</h2>
        <AddTaskButton onRefresh={fetchTasks}/>
        <ListTasks tasks={tasks} onRefresh={fetchTasks}/>
    </>;
}