import { Link } from "react-router-dom";
import React, { useContext } from "react";

export const UserContext = React.createContext({
  username: undefined,
});

export function LoginButton() {
  const { username } = useContext(UserContext);
  if (username) {
    return <Link to={"/profile"}>{username}</Link>;
  }
  return <Link to={"/login"}>Log in</Link>;
}
