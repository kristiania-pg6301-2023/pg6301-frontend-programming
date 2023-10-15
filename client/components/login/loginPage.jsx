import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./loginButton";

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { reload } = useContext(LoginContext);

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "content-type": "application/json",
      },
    });
    await reload();
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login page</h2>
      <div>
        Username <br />
        <input
          autoFocus={true}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        Password <br />
        <input
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button>Log in</button>
      </div>

      <pre>{JSON.stringify({ username, password })}</pre>
    </form>
  );
}
