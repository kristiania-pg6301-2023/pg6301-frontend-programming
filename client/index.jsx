import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./application.css";
import { LoginButton, UserContext } from "./components/login/loginButton";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Application() {
  const [username, setUsername] = useState();
  useEffect(() => {
    fetch("/api/login")
      .then((res) => res.json())
      .then((user) => setUsername(user.username));
  }, []);

  return (
    <UserContext.Provider value={{ username }}>
      <header>
        <h1>User database</h1>
      </header>
      <nav>
        <Link to={"/"}>Front page</Link>
        <Link to={"/"}>Another page</Link>
        <Link to={"/"}>Yet one more page</Link>
        <Link to={"/"}>Event more page</Link>
        <Link to={"/"}>Event more page</Link>
        <div className={"divider"} />
        <LoginButton />
      </nav>
      <main>
        <Routes>
          <Route path={"/"} element={<h2>Front page</h2>} />
          <Route path={"/profile"} element={<h2>User profile</h2>} />
          <Route path={"*"} element={<h2>Not Found</h2>} />
        </Routes>
      </main>
      <footer>Lecture 9: Open ID Connect</footer>
    </UserContext.Provider>
  );
}

root.render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>,
);
