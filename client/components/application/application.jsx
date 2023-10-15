import React, { useState } from "react";

export function Application() {
    const [counter, setCounter] = useState(0);
    return <>
        <h2>Welcome to my application</h2>
        <div>
            <button onClick={() => setCounter(oldValue => oldValue + 1)}>Click me</button>
        </div>
        <div>You have clicked {counter} times</div>
    </>;
}