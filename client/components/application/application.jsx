import { useEffect, useState } from "react";
import { LoginButton } from "../login/loginButton";
import { fetchJSON } from "../../lib/fetchJSON";

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
    return <LoginButton applicationConfig={applicationConfig} />;
  }

  return <h1>Application</h1>;
}
