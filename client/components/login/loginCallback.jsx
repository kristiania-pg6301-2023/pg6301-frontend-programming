import { useEffect } from "react";
import { fetchJSON } from "../../lib/fetchJSON";

export function LoginCallback({ onLogin, applicationConfig }) {
  const { openid_configuration, client_id } = applicationConfig;
  async function handleCallback() {
    let hash = Object.fromEntries(
      new URLSearchParams(window.location.hash.substring(1)),
    );
    let { access_token, code } = hash;

    if (!access_token && code) {
      const { token_endpoint } = await fetchJSON(openid_configuration);
      const code_verifier = window.sessionStorage.getItem("code_verifier");
      const redirect_uri = window.location.origin + "/login/callback";

      const payload = new URLSearchParams({
        client_id,
        code,
        code_verifier,
        grant_type: "authorization_code",
        redirect_uri
      });

      const res = await fetch(token_endpoint, {
        method: "POST",
        body: payload
      });

      if(res.ok) {
        const response = await res.json();
        access_token = response.access_token;
      } else {
        console.log("Token exchange failed: " + res.statusText);
        console.log(await res.json());
      }
    }

    if (!access_token) {
      console.log("No access token");
      return;
    }

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
  useEffect(() => {
    handleCallback();
  }, []);

  return <div>Login callback</div>;
}
