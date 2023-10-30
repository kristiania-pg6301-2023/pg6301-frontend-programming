import { useEffect, useState } from "react";

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
  return <h1>Application</h1>;
}
