import * as React from "react";
import {useState} from "react";
import * as ReactDOM from "react-dom";

import {randomQuestion} from "./questions";

function Quiz() {
    const [question, setQuestion] = useState(randomQuestion());

    return <h1>{question.question}</h1>;
}

ReactDOM.render(<Quiz/>, document.getElementById("app"));
