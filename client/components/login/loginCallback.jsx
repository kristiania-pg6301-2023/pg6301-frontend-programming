import { useEffect } from "react";

export function LoginCallback({ onLogin }) {
  async function handleCallback() {
    const { access_token } = Object.fromEntries(
      new URLSearchParams(window.location.hash.substring(1)),
    );
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