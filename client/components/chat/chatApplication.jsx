import React, { useState } from "react";

import "./application.css";

export function ChatApplication() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setMessages((current) => [...current, newMessage]);
    setNewMessage("");
  }

  return (
    <>
      <header>
        <h2>Kristiania Chat!</h2>
      </header>
      <main>
        {messages.map((message) => (
          <div>{message}</div>
        ))}
      </main>
      <footer>
        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button>Chat</button>
        </form>
      </footer>
    </>
  );
}
