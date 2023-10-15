import { Link } from "react-router-dom";
import React, { useContext } from "react";

export const LoginContext = React.createContext({
  user: undefined,
  username: undefined,
  async reload() {},
});

export function LoginButton() {
  const { username } = useContext(LoginContext);
  if (username) {
    return <Link to={"/profile"}>{username}</Link>;
  }
  return <Link to={"/login"}>Log in</Link>;
}
