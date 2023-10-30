import { fetchJSON } from "./fetchJSON.js";

export function userinfoMiddleware(openid_configuration) {
  return async (req, res, next) => {
    const { access_token } = req.cookies;
    if (access_token) {
      const { userinfo_endpoint } = await fetchJSON(openid_configuration);
      const res = await fetch(userinfo_endpoint, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });
      if (res.ok) {
        req.user = await res.json();
      } else if (res.status !== 401) {
        throw new Error("Failed to fetch userinfo " + res.statusCode);
      }
    }
    next();
  };
}