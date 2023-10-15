import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./application.css";
import { LoginButton, LoginContext } from "./components/login/loginButton";
import { LoginPage } from "./components/login/loginPage";
import { ProfilePage } from "./components/profile/profilePage";
import { LoginCallback } from "./components/login/loginCallback";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Application() {
  const [user, setUser] = useState();

  async function fetchUser() {
    const res = await fetch("/api/login");
    if (res.status === 401) {
      setUser(undefined);
    } else {
      const user = await res.json();
      setUser(user);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <LoginContext.Provider
      value={{ username: user?.username, user, reload: fetchUser }}
    >
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
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/login/callback"} element={<LoginCallback />} />
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
