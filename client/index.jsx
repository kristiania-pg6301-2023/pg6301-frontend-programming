import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./application.css";
import { LoginPage } from "./components/login/loginPage";
import { LoginNavLink } from "./components/login/loginNavLink";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Application() {
  return (
    <>
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
        <LoginNavLink />
      </nav>
      <main>
        <Routes>
          <Route path={"/"} element={<h2>Front page</h2>} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"*"} element={<h2>Not Found</h2>} />
        </Routes>
      </main>
      <footer>Lecture 9: Open ID Connect</footer>
    </>
  );
}

root.render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>,
);
