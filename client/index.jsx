import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function TaskApplication() {
    const [tasks, setTasks] = useState();
    useEffect(() => {
        setTasks([
            {
                title: "Prepare lecture",
                status: "done"
            },
            {
                title: "Give lecture",
                status: "doing"
            }
        ])
    }, []);



    return <>
        <h1>Here are the tasks</h1>
        <button>Add new task</button>
        {tasks && tasks.map(t => <div>
            <h3>{t.title} ({t.status})</h3>
        </div>)}
        {!tasks && <div>Loading...</div>}
        </>;
}

root.render(<TaskApplication />)