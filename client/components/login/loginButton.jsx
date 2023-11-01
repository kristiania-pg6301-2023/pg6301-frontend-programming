import { useEffect, useState } from "react";
import { fetchJSON } from "../../lib/fetchJSON";

export function LoginButton({ applicationConfig }) {
  async function loadAuthorizationUrl() {
    const { openid_configuration, client_id } = applicationConfig;
    const { authorization_endpoint } = await fetchJSON(openid_configuration);
    const redirect_uri = window.location.origin + "/login/callback";

    const code_verifier = randomString(50);
    window.sessionStorage.setItem("code_verifier", code_verifier);
    const code_challenge = await sha256(code_verifier);
    const state = randomString(50);
    window.sessionStorage.setItem("state", state);

    setAuthorizationUrl(
      authorization_endpoint +
        "?" +
        new URLSearchParams({
          response_mode: "fragment",
          response_type: "token",
          scope: "email profile",
          client_id,
          redirect_uri,
          //code_challenge,
          //code_challenge_method: "S256",
          state,
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

function randomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
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
