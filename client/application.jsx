import React, {useEffect, useState} from "react";

function ListTasks() {
    const [tasks, setTasks] = useState(undefined);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("/api/todos");
            setTasks(await res.json());
        }
        fetchData()
    }, [])

    if (!tasks) {
        return <div>Loading ...</div>;
    }

    return <>
        <h2>Tasks</h2>
        {tasks.map(t => <div>{t.title}</div>)}
        </>;
}

export function TodoApplication() {
    return <>
        <h1>Welcome to task application</h1>

        <ListTasks />

        </>;
}