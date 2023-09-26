import React from "react";
import ReactDOM from "react-dom/client";
import { MoviesApplication } from "./moviesApplication";

import "./application.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <MoviesApplication />
  </BrowserRouter>,
);
