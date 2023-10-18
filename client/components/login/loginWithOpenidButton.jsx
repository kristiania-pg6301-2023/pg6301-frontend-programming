import { useContext, useEffect, useState } from "react";
import { LoginContext } from "./loginContext";

const DISCOVERY_URL =
  "https://accounts.google.com/.well-known/openid-configuration";

export function LoginWithOpenidButton() {
  const [authorizationUrl, setAuthorizationUrl] = useState("");

  const { client_id } = useContext(LoginContext);

  async function loadAuthorizationUrl() {
    const res = await fetch(DISCOVERY_URL);
    const discoveryDoc = await res.json();
    const params = {
      response_type: "token",
      scope: "email",
      client_id,
      redirect_uri: window.location.origin + "/login/callback",
    };
    setAuthorizationUrl(
      discoveryDoc.authorization_endpoint + "?" + new URLSearchParams(params),
    );
  }

  useEffect(() => {
    loadAuthorizationUrl();
  }, []);

  return <a href={authorizationUrl}>Login with google</a>;
}
