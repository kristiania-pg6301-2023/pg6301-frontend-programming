import { HashRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

interface Question {
  id: number;
  question: string;
  answers: Record<string, string>;
}

interface Score {
  answers: number;
  correctAnswers: number;
}

function FrontPage() {
  return (
    <>
      <h2>Welcome</h2>
      <Link to={"/question"}>Ask a question</Link>
    </>
  );
}

function QuestionAnswerButton({
  answer,
  onClick,
}: {
  answer: string;
  onClick(): void;
}) {
  return (
    <div>
      <button onClick={onClick}>{answer}</button>
    </div>
  );
}

export function Question({
  question,
  onClickAnswer,
}: {
  question?: Question;
  onClickAnswer(id: number, k: string): void;
}) {
  if (!question) {
    return <div>Loading...</div>;
  }
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
            onClick={() => onClickAnswer(question.id, k)}
          />
        ))}
    </>
  );
}

function ShowAnswer({ onAskAnother }: { onAskAnother(): void }) {
  return (
    <>
      <Routes>
        <Route path={"/correct"} element={<h2>That&apos;s correct!</h2>} />
        <Route path={"/wrong"} element={<h2>That&apos;s wrong!</h2>} />
      </Routes>
      <div>
        <button onClick={onAskAnother}>Ask me another question</button>
      </div>
    </>
  );
}

function ShowScore() {
  const [score, setScore] = useState<Score>();
  async function fetchScore() {
    const res = await fetch("/api/score");
    setScore(await res.json());
  }
  useEffect(() => {
    fetchScore();
  }, []);

  if (!score) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>
        Your have {score.correctAnswers} out of {score.answers} correct answers
      </h2>
    </>
  );
}

export function Quiz({
  fetchQuestion,
  postAnswer,
}: {
  fetchQuestion(): Promise<Question>;
  postAnswer(id: number, answer: string): Promise<{ correct: boolean }>;
}) {
  const [question, setQuestion] = useState<Question>();

  async function loadRandomQuestion() {
    setQuestion(await fetchQuestion());
  }

  useEffect(() => {
    loadRandomQuestion();
  }, []);

  const navigateFn = useNavigate();

  async function handleClickAnswer(id: number, answer: string) {
    const response = await postAnswer(id, answer);
    if (response.correct) {
      navigateFn("/answer/correct");
    } else {
      navigateFn("/answer/wrong");
    }
  }

  async function handleAskAnother() {
    await loadRandomQuestion();
    navigateFn("/question");
  }

  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />} />
      <Route
        path={"/answer/*"}
        element={<ShowAnswer onAskAnother={handleAskAnother} />}
      />
      <Route
        path={"/question"}
        element={
          <Question question={question} onClickAnswer={handleClickAnswer} />
        }
      />
      <Route path={"/score"} element={<ShowScore />} />
      <Route path={"*"} element={<h2>Not Found</h2>} />
    </Routes>
  );
}

export function QuizApplication() {
  async function fetchQuestion() {
    const res = await fetch("/api/questions/random");
    return await res.json();
  }

  async function postAnswer(id: number, answer: string) {
    const res = await fetch("/api/questions/answer", {
      method: "POST",
      body: JSON.stringify({ id, answer }),
      headers: {
        "content-type": "application/json",
      },
    });
    return (await res.json()) as { correct: boolean };
  }

  return (
    <HashRouter>
      <header>
        <h1>React quiz app with express backend</h1>
      </header>
      <nav>
        <Link to={"/"}>Front page</Link>
        <Link to={"/score"}>See my score</Link>
      </nav>
      <main>
        <Quiz fetchQuestion={fetchQuestion} postAnswer={postAnswer} />
      </main>
      <footer>
        Created by Johannes Brodwall @ Kristiania University College
      </footer>
    </HashRouter>
  );
}
