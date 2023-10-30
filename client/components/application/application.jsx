import { useEffect, useState } from "react";
import { LoginButton } from "../login/loginButton";
import { fetchJSON } from "../../lib/fetchJSON";
import { LoginCallback } from "../login/loginCallback";

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

  if (window.location.pathname === "/login/callback") {
    return <LoginCallback applicationConfig={applicationConfig} />;
  }

  if (!applicationConfig.user) {
    return <LoginButton applicationConfig={applicationConfig} />;
  }

  return <h1>Application</h1>;
}
