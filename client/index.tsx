import React from "react";
import ReactDOM from "react-dom/client";
import { TaskApplication } from "./taskApplication";
import { BrowserRouter } from "react-router-dom";

import "./application.css";

const TASKS = [
  { _id: "1", title: "Prepare lecture" },
  { _id: "2", title: "Give lecture" },
];

function fetchTasks() {
  return TASKS;
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <TaskApplication fetchTasks={fetchTasks} />
  </BrowserRouter>,
);
