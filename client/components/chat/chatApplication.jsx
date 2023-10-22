import React from "react";

import "./application.css";
import { ChatView } from "./chatView";

export function ChatApplication() {
  return (
    <>
      <header>
        <h2>Kristiania Chat!</h2>
      </header>
      <ChatView />
    </>
  );
}
