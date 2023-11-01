import { useEffect, useState } from "react";

export function LoginCallback({ onLogin }) {
  const [error, setError] = useState();
  const [errorDescription, setErrorDescription] = useState();
  async function handleCallback() {
    const hash = Object.fromEntries(
      new URLSearchParams(window.location.hash.substring(1)),
    );

    const { access_token, error, error_description, state } = hash;
    setError(error);
    setErrorDescription(error_description);

    if (state !== window.sessionStorage.getItem("state")) {
      setError("Invalid state");
      return;
    }

    if (access_token) {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ access_token }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Login failed " + res.statusText);
      }
      onLogin();
    }
  }
  useEffect(() => {
    handleCallback();
  }, []);

  return (
    <>
      <div>Login callback</div>
      {error && <h3>{error}</h3>}
      {errorDescription && <p>{errorDescription}</p>}
    </>
  );
}
