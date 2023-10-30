import { useEffect, useState } from "react";
import { fetchJSON } from "../../lib/fetchJSON";

export function LoginButton({ applicationConfig }) {
  async function loadAuthorizationUrl() {
    const { openid_configuration, client_id } = applicationConfig;
    const { authorization_endpoint } = await fetchJSON(openid_configuration);
    const redirect_uri = window.location.origin + "/login/callback";
    setAuthorizationUrl(
      authorization_endpoint +
        "?" +
        new URLSearchParams({
          response_type: "token",
          scope: "email profile",
          client_id,
          redirect_uri,
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
