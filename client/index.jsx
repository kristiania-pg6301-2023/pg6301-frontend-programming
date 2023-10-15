import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
// ... continued from above - replace the `root.render(...)` line
root.render(<Application />);

function Application() {
    const [counter, setCounter] = useState(0);
    return <>
        <h2>Welcome to my application</h2>
        <div>
            <button onClick={() => setCounter(oldValue => oldValue + 1)}>Click me</button>
        </div>
        <div>You have clicked {counter} times</div>
    </>;
}