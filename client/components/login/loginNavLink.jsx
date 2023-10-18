import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export function LoginNavLink() {
  const [username, setUsername] = useState();

  async function loadUser() {
    const res = await fetch("/api/login");
    if (!res.ok) {
      throw new Error("Something went wrong fetching user " + res.statusText);
    }
    const user = await res.json();
    setUsername(user.username);
  }

  useEffect(() => {
    loadUser();
  }, []);

  if (username) {
    return <Link to={"/profile"}>{username}</Link>;
  }

  return <Link to={"/login"}>Log in</Link>;
}
