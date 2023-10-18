import React, { useContext } from "react";
import { LoginContext } from "../login/loginContext";
import { useNavigate } from "react-router-dom";

export function ProfilePage() {
  const navigate = useNavigate();
  const { username, loadUser } = useContext(LoginContext);

  async function handleSubmitLogout(e) {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Failed to log out " + res.statusText);
    }
    await loadUser();
    navigate("/");
  }

  return (
    <>
      <h2>Profile page</h2>
      <div>Username: {username}</div>

      <form onSubmit={handleSubmitLogout}>
        <button>Log out</button>
      </form>
    </>
  );
}
