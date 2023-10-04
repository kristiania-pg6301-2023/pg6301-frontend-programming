# Lecture 8: Robustness, promises

Starting point: Everything is working, but just on the client.
We have a simple test for the client and the server and we're
using TypeScript. The server connects to MongoDB but doesn't use it

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
- create `index.tsx` and `taskApplication.tsx`
- create structure and routes for TaskApplication with FrontPage, TasksLists and AddTaskForm
- `application.css` layout
- npm install prettier; setup prettier, check and dev scripts
- `npm run prettier`
- `cd client && npm i -D typescript && npx tsc --init`
- `npm pkg set scripts.check="npm run check:prettier && npm run check:typescript" && npm pkg set scripts.check:typescript="npm run check:typescript:client" && npm pkg set scripts.check:typescript:client="cd client && npm run check:typescript" && cd client && npm pkg set scripts.check:typescript="tsc --noEmit"`
- rename _.jsx to _.tsx
- Install test script in package.json
- `npm i -D jest @types/jest ts-jest react-test-renderer @types/react-test-renderer`
- Implement test for TasksList
- Implement test for AddTaskForm
- `mkdir server && cd server && npm i express && npm i -D nodemon`
- `npm run dev` in root should run `server/server.js` which runs `express`
- `npm i mongodb dotenv` and make MongoDB perform a query at start
