import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./loginButton";

export function LoginCallback() {
  const { reload } = useContext(LoginContext);
  const navigate = useNavigate();
  const callbackParameters = Object.fromEntries(
    new URLSearchParams(window.location.hash.substring(1)),
  );

  async function handleCallback() {
    const { access_token } = callbackParameters;
    const res = await fetch("/api/login/accessToken", {
      method: "POST",
      body: JSON.stringify({ access_token }),
      headers: {
        "content-type": "application/json",
      },
    });
    if (!res.ok) {
      console.error(await res.text());
      throw new Error("Failed to POST access token");
    }
    await reload();
    navigate("/");
  }

  useEffect(() => {
    handleCallback();
  }, []);

  return (
    <>
      <div>Please wait...</div>
      <pre>{JSON.stringify(callbackParameters, null, 2)}</pre>
    </>
  );
}
