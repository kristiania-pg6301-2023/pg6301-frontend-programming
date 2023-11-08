import { useEffect, useState } from "react";
import { fetchJSON } from "../../lib/fetchJSON";

export function LoginButton({ applicationConfig }) {
  async function loadAuthorizationUrl() {
    const { openid_configuration, client_id } = applicationConfig;
    const { authorization_endpoint } = await fetchJSON(openid_configuration);
    const redirect_uri = window.location.origin + "/login/callback";
    const state = randomString(50);
    window.sessionStorage.setItem("state", state);
    const code_verifier = randomString(50);
    window.sessionStorage.setItem("code_verifier", code_verifier);
    setAuthorizationUrl(
      authorization_endpoint +
        "?" +
        new URLSearchParams({
          response_mode: "fragment",
          response_type: "code",
          scope: "profile openid",
          client_id,
          redirect_uri,
          state,
          code_challenge: await sha256(code_verifier),
          code_challenge_method: "S256",
        }),
    );
  }

  const [authorizationUrl, setAuthorizationUrl] = useState();

  useEffect(() => {
    loadAuthorizationUrl();
  }, []);

  return (
    <div>
      <a href={authorizationUrl}>Log in</a>
    </div>
  );
}

export function randomString(length) {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz1234567890";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return result;
}

export async function sha256(string) {
  const binaryHash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder("utf-8").encode(string),
  );
  return btoa(String.fromCharCode.apply(null, new Uint8Array(binaryHash)))
    .split("=")[0]
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}
