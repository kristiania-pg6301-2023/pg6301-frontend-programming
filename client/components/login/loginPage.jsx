import React, { useState } from "react";

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "content-type": "application/json",
      },
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login page</h2>
      <div>
        Username <br />
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
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
