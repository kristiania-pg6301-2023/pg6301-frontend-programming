# Exercise 10: Web sockets

In this exercise you should create a server which lets two browser windows chat in real time with web sockets.

The exercise follows the structure of the lecture. Here are some notes.

1. Create
   a [React application](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming#creating-the-frontend-project)
   with
   an [Express backend](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming#converting-react-to-serve-from-express)
2. You can start with a simple application to chat with yourself
    - Create a layout with a message list and a form with an input
    - Represent the chat messages as `const [messages, setMessages] = useState([])`
    - The input should be bound to a `useState` string
    - Submitting the form should append the new message to the messages-list and clear the current message
3. On the client side, create a `new WebSocket()` in a React `useEffect`
    - `ws.onmessage` should update the state
    - In `handleSubmit`, call `ws.send()` with the new message
4. On the server side you must use a WebSocketServer that broadcasts incoming messages to other clients
    - `npm install ws`
    - `import { WebSocketServer } from "ws"` in `server.js`
    - Connect the websocket to express: `server.on("upgrade", (req, res, head) => wsServer.handleUpgrade()` (
      where `server` is the return value from `app.listen`)
    - Add a callback to `wsServer.on("connection")` to save the sockets and register a message callback
    - Add a callback to each socket `socket.on("message")` to send the message to all the sockets

Here are some additional things to try:

- To get it to work on Heroku, you must use `wss` instead of `ws`. It's smart to test this right away
- If you want to send more information than the chat message, you have to serialize it with JSON.stringify. Try having
  users register with a username
- In a real application, the server should validate the messages before transmitting them. You can expand on OpenID
  Connect from the last lecture and let the server add the user name before sending out the messages again
