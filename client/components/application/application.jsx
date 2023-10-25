import { useEffect, useState } from "react";

export function Application() {
  const [username, setUsername] = useState();

  async function loadUsername() {
    const res = await fetch("/api/login");
    if (!res.ok && res.status !== 401) {
      throw new Error("Failed to fetch user " + res.statusText);
    }
    const user = await res.json();
    setUsername(user.username);
  }

  useEffect(() => {
    loadUsername();
  }, []);

  const [credentials, setCredentials] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ credentials }),
      headers: {
        "content-type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to log in " + res.statusText);
    }
  }

  if (!username) {
    return (
      <>
        <form onSubmit={handleLogin}>
          Username:
          <input
            type="text"
            value={credentials}
            onChange={(e) => setCredentials(e.target.value)}
          />
          <button>Log in</button>
        </form>
      </>
    );
  }

  return <ChatWindow username={username} />;
}

export function ChatWindow({ username }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [webSocket, setWebSocket] = useState();

  useEffect(() => {
    const webSocket = new WebSocket("ws://" + window.location.host);
    webSocket.onmessage = (event) => {
      console.log(event.data);
      setMessages((current) => [...current, JSON.parse(event.data)]);
    };
    setWebSocket(webSocket);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    webSocket.send(newMessage);

    setNewMessage("");
  }

  return (
    <>
      <header>
        <h1>Chat application</h1>
        <div>{username}</div>
      </header>

      <main>
        {messages.map(({ username, message }, index) => (
          <li key={index}>
            <strong>{username}</strong> {message}
          </li>
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
