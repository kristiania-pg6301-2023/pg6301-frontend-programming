import React, {useEffect, useRef, useState} from "react";

function ListTasks() {
    const [tasks, setTasks] = useState(undefined);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("/api/todos");
            setTasks(await res.json());
        }

        fetchData();
    }, [])

    if (!tasks) {
        return <div>Loading ...</div>;
    }

    return <>
        {tasks.map(t => <div key={t.title}>{t.title}</div>)}
    </>;
}

function AddTaskButton() {
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
    return <>
        <h1>Welcome to task application</h1>

        <h2>Tasks</h2>
        <AddTaskButton/>
        <ListTasks/>

    </>;
}