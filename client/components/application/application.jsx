import React from "react";
import { NavLink } from "react-router-dom";
import { ApplicationRoutes } from "./applicationRoutes";

import "./application.css";

export function Application() {
  return (
    <>
      <header>
        <h1>Movies Database Exercise</h1>
      </header>
      <nav>
        <NavLink to={"/"}>Front page</NavLink>
      </nav>
      <main>
        <ApplicationRoutes />
      </main>
      <footer>Created by ...</footer>
    </>
  );
}
