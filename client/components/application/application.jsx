import { useEffect, useState } from "react";

export function Application() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [webSocket, setWebSocket] = useState();

  useEffect(() => {
    setWebSocket(new WebSocket("ws://" + window.location.origin));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    webSocket.send(newMessage);

    setMessages((current) => [...current, newMessage]);
    setNewMessage("");
  }

  return (
    <>
      <header>
        <h1>Chat application</h1>
      </header>

      <main>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
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
