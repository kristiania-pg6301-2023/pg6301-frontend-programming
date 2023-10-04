import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

interface TodoTask {
  _id: string;
  title: string;
}

function FrontPage() {
  return (
    <>
      <ul>
        <li>
          <Link to={"/tasks"}>List tasks</Link>
        </li>
        <li>
          <Link to={"/tasks/new"}>Create task</Link>
        </li>
      </ul>
    </>
  );
}

function TasksList({ fetchTasks }: { fetchTasks(): TodoTask[] }) {
  const [tasks, setTasks] = useState<TodoTask[]>([]);
  function loadTasks() {
    setTasks(fetchTasks());
  }
  useEffect(() => {
    loadTasks();
  }, []);
  return (
    <>
      <h2>List tasks</h2>
      {tasks.map((t) => (
        <div key={t._id}>{t.title}</div>
      ))}
    </>
  );
}

function AddTaskForm() {
  return (
    <>
      <h2>Add tasks</h2>
    </>
  );
}

function TaskRoutes({ fetchTasks }: { fetchTasks(): TodoTask[] }) {
  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />} />
      <Route path={"/tasks"} element={<TasksList fetchTasks={fetchTasks} />} />
      <Route path={"/tasks/new"} element={<AddTaskForm />} />
      <Route path={"*"} element={<h2>Not found</h2>} />
    </Routes>
  );
}

export function TaskApplication({ fetchTasks }: { fetchTasks(): TodoTask[] }) {
  return (
    <>
      <header>
        <h1>My Task Application</h1>
      </header>
      <nav>
        <Link to={"/"}>Front page</Link>
      </nav>
      <main>
        <TaskRoutes fetchTasks={fetchTasks} />
      </main>
      <footer>Made with 💚 by Johannes Brodwall</footer>
    </>
  );
}
