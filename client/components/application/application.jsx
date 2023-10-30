import { useEffect, useState } from "react";
import { LoginButton } from "../login/loginButton";

async function fetchJSON(path) {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}: ${res.statusText}`);
  }
  return await res.json();
}

export function Application() {
  async function loadConfig() {
    setApplicationConfig(await fetchJSON("/api/config"));
  }

  const [applicationConfig, setApplicationConfig] = useState();
  useEffect(() => {
    loadConfig();
  }, []);

  if (!applicationConfig) {
    return <div>Loading...</div>;
  }

  if (!applicationConfig.user) {
    return <LoginButton />;
  }

  return <h1>Application</h1>;
}
