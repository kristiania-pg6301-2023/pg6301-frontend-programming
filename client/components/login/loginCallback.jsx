import { useEffect, useState } from "react";
import { fetchJSON } from "../../lib/fetchJSON";

export function LoginCallback({ onLogin, applicationConfig }) {
  const [error, setError] = useState();
  const [errorDescription, setErrorDescription] = useState();
  async function handleCallback() {
    const hash = Object.fromEntries(
      new URLSearchParams(window.location.hash.substring(1)),
    );

    let { access_token, error, error_description, state, code } = hash;
    setError(error);
    setErrorDescription(error_description);

    if (state !== window.sessionStorage.getItem("state")) {
      setError("Invalid state");
      return;
    }

    if (code) {
      const { openid_configuration, client_id } = applicationConfig;
      const { token_endpoint } = await fetchJSON(openid_configuration);
      const code_verifier = window.sessionStorage.getItem("code_verifier");

      const res = await fetch(token_endpoint, {
        method: "POST",
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          client_id,
          code_verifier,
        }),
      });
      const json = await res.json();
      console.log(json);
      access_token = json.access_token;
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
