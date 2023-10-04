# Lecture 8: Robustness, promises

Starting point: Everything is working, but just on the client.
We have a simple test for the client and the server and we're
using TypeScript.

- [ ] Getting Express to handle `<BrowserRouter />`
  - [ ] Middleware and the Express pipeline model
  - [ ] Fallback middleware
- [ ] Move logic to server
- [ ] Handle slow loading on client
  - [ ] callbacks, Promises, async/await
- [ ] Handle errors from server on GET
- [ ] Handle errors from server on POST
- [ ] More on Express middleware and routers
  - [ ] Making our own router
  - [ ] Making a router constructor
  - [ ] The express.json-mystery bug

## Log:

- `mkdir client && cd client && npm i -D parcel && npm install react react-dom react-router-dom`
- `npm pkg set scripts.dev="parcel serve index.html"`; create "index.html"
- create `index.jsx` and `taskApplication.jsx`
- create structure and routes for TaskApplication with FrontPage, TasksLists and AddTaskForm
- `application.css` layout
- npm install prettier; setup prettier, check and dev scripts
- `npm run prettier`