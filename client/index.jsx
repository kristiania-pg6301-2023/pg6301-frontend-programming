import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./application.css";
import { LoginPage } from "./components/login/loginPage";
import { LoginNavLink } from "./components/login/loginNavLink";
import { ProfilePage } from "./components/profile/profilePage";
import { LoginContext } from "./components/login/loginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Application() {
  const [username, setUsername] = useState();

  async function loadUser() {
    const res = await fetch("/api/login");
    if (!res.ok) {
      throw new Error("Something went wrong fetching user " + res.statusText);
    }
    const user = await res.json();
    setUsername(user.username);
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <LoginContext.Provider value={{ username }}>
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
          <Route path={"/profile"} element={<ProfilePage />} />
          <Route path={"*"} element={<h2>Not Found</h2>} />
        </Routes>
      </main>
      <footer>Lecture 9: Open ID Connect</footer>
    </LoginContext.Provider>
  );
}

root.render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>,
);
