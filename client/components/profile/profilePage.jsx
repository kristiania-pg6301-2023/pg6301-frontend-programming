import React, { useContext } from "react";
import { LoginContext } from "../login/loginContext";

export function ProfilePage() {
  const { username } = useContext(LoginContext);
  return (
    <>
      <h2>Profile page</h2>
      <div>Username: {username}</div>
    </>
  );
}
