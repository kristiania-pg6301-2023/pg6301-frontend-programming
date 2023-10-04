import React from "react";
import ReactDOM from "react-dom/client";
import { TaskApplication } from "./taskApplication";
import { BrowserRouter } from "react-router-dom";

import "./application.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BrowserRouter><TaskApplication /></BrowserRouter>);