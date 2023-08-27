import React from "react";
import ReactDOM from "react-dom/client";

import "./quizAppliction.css";
import { HashRouter, Link, Route, Routes, useNavigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function FrontPage() {
  return (
    <>
      <h2>Welcome</h2>
      <Link to={"/question"}>Ask a question</Link>
    </>
  );
}

function Question({ onClickAnswer }) {
  return (
    <>
      <h2>Can you answer this?</h2>
      <p>Question....</p>
      <div>
        <button onClick={() => onClickAnswer("a")}>Some answer</button>
      </div>
      <div>
        <button onClick={() => onClickAnswer("b")}>Some other answer</button>
      </div>
    </>
  );
}

function ShowAnswer() {
  return (
    <>
      <h1>You selected...</h1>
      <Routes>
        <Route path={"/correct"} element={<p>That's correct!</p>} />
        <Route path={"/wrong"} element={<p>That's wrong!</p>} />
      </Routes>
      <Link to={"/question"}>Ask me another question</Link>
    </>
  );
}

function Quiz() {
  const navigateFn = useNavigate();

  function handleClickAnswer(answer) {
    if (answer === "a") {
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
        element={<Question onClickAnswer={handleClickAnswer} />}
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
