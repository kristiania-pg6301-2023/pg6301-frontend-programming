import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./loginButton";

const OPENID_DISCOVERY_URL =
  "https://accounts.google.com/.well-known/openid-configuration";
const CLIENT_ID =
  "34816606807-b6r7038squrk57g5qir3ldh223oce9u6.apps.googleusercontent.com";

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Can't fetch " + url);
  }
  return await res.json();
}

function LoginWithOauthButton() {
  const [authorizationUrl, setAuthorizationUrl] = useState();
  async function generateAuthorizationUrl() {
    const discoveryDoc = await fetchJson(OPENID_DISCOVERY_URL);
    console.log(discoveryDoc.authorization_endpoint);
    const queryString = "";
    setAuthorizationUrl(
      discoveryDoc.authorization_endpoint + "?" + queryString,
    );
  }

  useEffect(() => {
    generateAuthorizationUrl();
  }, []);

  return <a href={authorizationUrl}>Log in with Google</a>;
}

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
      <LoginWithOauthButton />
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
