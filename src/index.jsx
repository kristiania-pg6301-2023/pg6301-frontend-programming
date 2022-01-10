import * as React from "react";
import {useState} from "react";
import * as ReactDOM from "react-dom";

import {isCorrectAnswer, randomQuestion} from "./questions";

function ShowQuestion({question, onAnswer}) {
    return <>
        <h1>{question.question}</h1>
        {Object.keys(question.answers)
            .filter(a => question.answers[a])
            .map(a => <p key={a}>
                <button onClick={() => onAnswer(a)}>{question.answers[a]}</button>
            </p>)}
    </>;
}

function ShowAnswerStatus({answer, onRestart, question}) {
    return <>
        <h1>{isCorrectAnswer(question, answer) ? "Right" : "Wrong"}</h1>
        <p>
            <button onClick={onRestart}>Another question</button>
        </p>
    </>;
}

function Quiz() {
    const [question, setQuestion] = useState(randomQuestion());
    const [answer, setAnswer] = useState();

    function handleRestart() {
        setQuestion(randomQuestion());
        setAnswer(undefined);
    }

    if (answer) {
        return <ShowAnswerStatus question={question} answer={answer} onRestart={handleRestart}/>;
    }

    return <ShowQuestion question={question} onAnswer={setAnswer}/>;
}

ReactDOM.render(<Quiz/>, document.getElementById("app"));
