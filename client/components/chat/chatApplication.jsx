import React, { useEffect, useState } from "react";

import "./application.css";
import { ChatView } from "./chatView";
import { LoginView } from "../login/loginView";

export function ChatApplication() {
  const [username, setUsername] = useState();

  async function loadLogin() {
    const res = await fetch("/api/login");
    if (res.status === 401) {
      setUsername(undefined);
    } else if (!res.ok) {
      throw new Error("Failed to fetch login: " + res.statusText);
    } else {
      setUsername((await res.json()).username);
    }
  }

  useEffect(() => {
    loadLogin();
  }, []);
  return (
    <>
      <header>
        <h2>Kristiania Chat!</h2>
        <div>{username}</div>
      </header>
      {username ? <ChatView /> : <LoginView />}
    </>
  );
}
