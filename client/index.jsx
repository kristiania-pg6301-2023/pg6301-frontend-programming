import React from "react";
import ReactDOM from "react-dom/client";
import { MoviesApplication } from "./moviesApplication";

import "./application.css";
import { BrowserRouter, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <HashRouter>
    <MoviesApplication />
  </HashRouter>,
);
