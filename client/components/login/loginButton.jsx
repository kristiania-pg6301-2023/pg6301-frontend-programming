import { Link } from "react-router-dom";
import React from "react";

export function LoginButton() {
  const username = "Johannes";
  if (username) {
    return <Link to={"/profile"}>{username}</Link>;
  }
  return <Link to={"/login"}>Log in</Link>;
}