import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function FrontPage() {
  return <>
    <ul>
      <li><Link to={"/tasks"}>List tasks</Link></li>
      <li><Link to={"/tasks/new"}>Create task</Link></li>
    </ul>
  </>;
}

function TasksList() {
  return <h2>List tasks</h2>;
}

function AddTaskForm() {
  return <h2>Add tasks</h2>;
}

function TaskRoutes() {
  return <Routes>
    <Route path={"/"} element={<FrontPage />} />
    <Route path={"/tasks"} element={<TasksList />} />
    <Route path={"/tasks/new"} element={<AddTaskForm />} />
    <Route path={"*"} element={<h2>Not found</h2>} />
  </Routes>;
}

export function TaskApplication() {
  return <>
    <header><h1>My Task Application</h1></header>
    <nav><Link to={"/"}>Front page</Link></nav>
    <main>
      <TaskRoutes />
    </main>
    <footer>Made with 💚 by Johannes Brodwall</footer>
  </>;
}
