import * as React from "react";
import {useState} from "react";
import * as ReactDOM from "react-dom";

import {randomQuestion} from "./questions";

function Quiz() {
    const [question, setQuestion] = useState(randomQuestion());
    const [answer, setAnswer] = useState();

    if (answer) {
        return <h1>Right or wrong</h1>;
    }

    return <>
        <h1>{question.question}</h1>
        {Object.keys(question.answers)
            .filter(a => question.answers[a])
            .map(a => <p key={a}>
                <button onClick={e => setAnswer(a)}>{question.answers[a]}</button>
            </p>)}
    </>;
}

ReactDOM.render(<Quiz/>, document.getElementById("app"));
