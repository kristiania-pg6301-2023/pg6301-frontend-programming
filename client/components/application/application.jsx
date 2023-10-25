import { useState } from "react";

export function Application() {
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
        <h1>Chat application</h1>
      </header>

      <main>
        {messages.map((message) => (
          <li>{message}</li>
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
