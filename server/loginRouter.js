import express from "express";

const OPENID_DISCOVERY_URL =
  "https://accounts.google.com/.well-known/openid-configuration";

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Can't fetch " + url);
  }
  return await res.json();
}

export const loginRouter = express.Router();

loginRouter.get("", async (req, res) => {
  const { username, access_token } = req.signedCookies;
  if (username) {
    res.send({ username });
  } else if (access_token) {
    const discoveryDocument = await fetchJson(OPENID_DISCOVERY_URL);
    const { userinfo_endpoint } = discoveryDocument;
    const userinfoRes = await fetch(userinfo_endpoint, {
      headers: {
        authorization: `Bearer ${access_token}`,
      },
    });
    const userinfo = await userinfoRes.json();
    res.send({
      ...userinfo,
      username: userinfo.given_name + " " + userinfo.family_name,
    });
  } else {
    res.sendStatus(401);
  }
});

loginRouter.post("", (req, res) => {
  const { username, password } = req.body;
  res.cookie("username", username, { signed: true });
  res.sendStatus(204);
});

loginRouter.post("/accessToken", (req, res) => {
  const { access_token } = req.body;
  res.cookie("access_token", access_token, { signed: true });
  res.sendStatus(204);
});

loginRouter.delete("", (req, res) => {
  res.clearCookie("username");
  res.clearCookie("access_token");
  res.sendStatus(204);
});
