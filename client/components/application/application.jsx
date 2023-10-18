import React, { useEffect, useState } from "react";
import { LoginContext } from "../login/loginContext";
import { Link, Route, Routes } from "react-router-dom";
import { LoginNavLink } from "../login/loginNavLink";
import { LoginPage } from "../login/loginPage";
import { ProfilePage } from "../profile/profilePage";

const GOOGLE_CLIENT_ID =
  "34816606807-c674fr663n4s8lqjmtr5i444qnosva3b.apps.googleusercontent.com";

export function Application() {
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
    <LoginContext.Provider
      value={{ username, loadUser, client_id: GOOGLE_CLIENT_ID }}
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
