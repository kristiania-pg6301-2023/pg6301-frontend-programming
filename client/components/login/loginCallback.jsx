import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./loginContext";

export function LoginCallback() {
  const [debug, setDebug] = useState();

  const { loadUser } = useContext(LoginContext);
  const navigate = useNavigate();

  async function handleCallback() {
    const hashObject = Object.fromEntries(
      new URLSearchParams(window.location.hash.substring(1)),
    );
    const { access_token } = hashObject;
    const res = await fetch("/api/login/access_token", {
      method: "POST",
      body: JSON.stringify({ access_token }),
      headers: {
        "content-type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Something went wrong " + res.statusText);
    }

    await loadUser();
    navigate("/");
  }

  useEffect(() => {
    handleCallback();
  }, []);

  return (
    <>
      <div>please wait...</div>
      <pre>{debug}</pre>
    </>
  );
}
