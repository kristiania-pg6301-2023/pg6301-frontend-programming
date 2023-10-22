import React, { useEffect, useState } from "react";

import "./application.css";

export function ChatApplication() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [webSocket, setWebSocket] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    webSocket.send(newMessage);
    setNewMessage("");
  }

  useEffect(() => {
    const webSocket = new WebSocket("ws://localhost:3000");
    setWebSocket(webSocket);
    webSocket.onmessage = (event) => {
      console.log({ event });
      setMessages((current) => [...current, event.data]);
    };
  }, []);

  return (
    <>
      <header>
        <h2>Kristiania Chat!</h2>
      </header>
      <main>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
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
