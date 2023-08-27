import React from "react";
import ReactDOM from "react-dom/client";

import "./quizAppliction.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function FrontPage() {
  return (
    <>
      <h2>Welcome</h2>
      <a href={"#"}>Ask a question</a>
    </>
  );
}

function QuizApplication() {
  return (
    <>
      <header>
        <h1>The Quiz App</h1>
      </header>
      <nav>
        <a href={""}>Front page</a>
      </nav>
      <main>
        <FrontPage />
      </main>
      <footer>
        Created by Johannes Brodwall @ Kristiania University College
      </footer>
    </>
  );
}

root.render(<QuizApplication />);
