import React, { FormEvent, useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

export interface TodoTask {
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

function TasksList({ fetchTasks }: { fetchTasks(): Promise<TodoTask[]> }) {
  const [tasks, setTasks] = useState<TodoTask[]>([]);
  async function loadTasks() {
    setTasks(await fetchTasks());
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

function AddTaskForm({
  onAddTask,
}: {
  onAddTask(task: Omit<TodoTask, "_id">): Promise<undefined>;
}) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string>();
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await onAddTask({ title });
      navigate("/tasks");
    } catch (e) {
      setError(e as string);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add tasks</h2>
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <button>Submit</button>
      </div>
      {error && <div className={"errorMessage"}>{error}</div>}
    </form>
  );
}

export function TaskRoutes({
  fetchTasks,
  onAddTask,
}: {
  fetchTasks(): Promise<TodoTask[]>;
  onAddTask(task: TodoTask): Promise<undefined>;
}) {
  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />} />
      <Route path={"/tasks"} element={<TasksList fetchTasks={fetchTasks} />} />
      <Route
        path={"/tasks/new"}
        element={<AddTaskForm onAddTask={onAddTask} />}
      />
      <Route path={"*"} element={<h2>Not found</h2>} />
    </Routes>
  );
}

export function TaskApplication() {
  async function fetchTasks(): Promise<TodoTask[]> {
    const res = await fetch("/api/tasks");
    return await res.json();
  }

  async function handleAddTask(task: Omit<TodoTask, "_id">) {
    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      return Promise.reject("Failed! " + res.statusText);
    }
  }

  return (
    <>
      <header>
        <h1>My Task Application</h1>
      </header>
      <nav>
        <Link to={"/"}>Front page</Link>
      </nav>
      <main>
        <TaskRoutes fetchTasks={fetchTasks} onAddTask={handleAddTask} />
      </main>
      <footer>Made with 💚 by Johannes Brodwall</footer>
    </>
  );
}
