import React, { useState } from "react";

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
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
