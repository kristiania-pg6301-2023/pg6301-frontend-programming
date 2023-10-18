import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { LoginContext } from "./loginContext";

export function LoginNavLink() {
  const { username } = useContext(LoginContext);

  if (username) {
    return <Link to={"/profile"}>{username}</Link>;
  }

  return <Link to={"/login"}>Log in</Link>;
}
