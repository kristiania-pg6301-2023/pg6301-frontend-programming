import * as React from "react";
import {useState} from "react";
import * as ReactDOM from "react-dom";

import {randomQuestion} from "./questions";

function Quiz() {
    const [question, setQuestion] = useState(randomQuestion());

    return <>
        <h1>{question.question}</h1>
        {Object.keys(question.answers)
            .filter(a => question.answers[a])
            .map(a => <p key={a}><button>{question.answers[a]}</button></p>)}
    </>;
}

ReactDOM.render(<Quiz/>, document.getElementById("app"));
