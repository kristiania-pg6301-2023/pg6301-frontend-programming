import React, { FormEvent, useContext, useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const ApplicationContext = React.createContext<{
  fetchTasks: () => Promise<TodoTask[]>;
  addTask: (task: Omit<TodoTask, "_id">) => Promise<void>;
}>({
  fetchTasks: async () => [],
  addTask: async () => {},
});

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

function TasksList(_: { fetchTasks(): Promise<TodoTask[]> }) {
  const { fetchTasks } = useContext(ApplicationContext);
  const [tasks, setTasks] = useState<TodoTask[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  async function loadTasks() {
    setLoading(true);
    setError(undefined);
    try {
      setTasks(await fetchTasks());
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);
  return (
    <>
      <h2>List tasks</h2>
      {loading && <div>Loading....</div>}
      {error && (
        <div>
          Error! {error.message}
          <button onClick={loadTasks}>Retry</button>
        </div>
      )}
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
  const { addTask } = useContext(ApplicationContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string>();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setSubmitting(true);
      await addTask({ title });
      navigate("/tasks");
    } catch (e) {
      setError(e as string);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset disabled={submitting}>
        <h2>Add tasks</h2>
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus={true}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
        {submitting && <div>Please wait...</div>}
        {error && <div className={"errorMessage"}>{error}</div>}
      </fieldset>
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
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return await res.json();
  }

  async function addTask(task: Omit<TodoTask, "_id">) {
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
    <ApplicationContext.Provider value={{ fetchTasks, addTask }}>
      <header>
        <h1>My Task Application</h1>
      </header>
      <nav>
        <Link to={"/"}>Front page</Link>
      </nav>
      <main>
        <TaskRoutes fetchTasks={fetchTasks} onAddTask={addTask} />
      </main>
      <footer>Made with 💚 by Johannes Brodwall</footer>
    </ApplicationContext.Provider>
  );
}
