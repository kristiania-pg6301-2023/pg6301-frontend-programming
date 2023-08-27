import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./quizAppliction.css";
import { HashRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { isCorrectAnswer, randomQuestion } from "../questions";

const root = ReactDOM.createRoot(document.getElementById("root"));

function FrontPage() {
  return (
    <>
      <h2>Welcome</h2>
      <Link to={"/question"}>Ask a question</Link>
    </>
  );
}

function QuestionAnswerButton({ answer, onClick }) {
  return (
    <div>
      <button onClick={onClick}>{answer}</button>
    </div>
  );
}

function Question({ question, onClickAnswer }) {
  return (
    <>
      <h2>Can you answer this?</h2>
      <p>{question.question}</p>
      {Object.keys(question.answers)
        .filter((k) => question.answers[k])
        .map((k) => (
          <QuestionAnswerButton
            key={k}
            answer={question.answers[k]}
            onClick={() => onClickAnswer(k)}
          />
        ))}
    </>
  );
}

function ShowAnswer() {
  return (
    <>
      <Routes>
        <Route path={"/correct"} element={<h2>That's correct!</h2>} />
        <Route path={"/wrong"} element={<h2>That's wrong!</h2>} />
      </Routes>
      <Link to={"/question"}>Ask me another question</Link>
    </>
  );
}

function Quiz() {
  const [question, setQuestion] = useState(randomQuestion());

  const navigateFn = useNavigate();

  function handleClickAnswer(answer) {
    if (isCorrectAnswer(question, answer)) {
      navigateFn("/answer/correct");
    } else {
      navigateFn("/answer/wrong");
    }
  }

  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />} />
      <Route path={"/answer/*"} element={<ShowAnswer />} />
      <Route
        path={"/question"}
        element={
          <Question question={question} onClickAnswer={handleClickAnswer} />
        }
      />
      <Route path={"*"} element={<h2>Not Found</h2>} />
    </Routes>
  );
}

function QuizApplication() {
  return (
    <HashRouter>
      <header>
        <h1>The Quiz App</h1>
      </header>
      <nav>
        <Link to={"/"}>Front page</Link>
      </nav>
      <main>
        <Quiz />
      </main>
      <footer>
        Created by Johannes Brodwall @ Kristiania University College
      </footer>
    </HashRouter>
  );
}

root.render(<QuizApplication />);
