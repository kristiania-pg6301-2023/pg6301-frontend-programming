import * as React from "react";
import {useState} from "react";
import * as ReactDOM from "react-dom";

import { Questions } from "./questions";

function Quiz() {
    const [question, setQuestion] = useState(Questions[Math.trunc(Math.random()*Questions.length)]);

    return <h1>{question.question}</h1>;
}

ReactDOM.render(<Quiz/>, document.getElementById("app"));
