# Lecture 8: Robustness, promises

Starting point: Everything is working, but just on the client.
We have a simple test for the client and the server and we're
using TypeScript. The server connects to MongoDB but doesn't use it

- [x] `@media (prefers-color-scheme: dark)`
- [x] Getting Express to handle `<BrowserRouter />`
  - [x] Middleware and the Express pipeline model using `supertest`
  - [x] Fallback middleware
- [x] Move logic to server
- [x] Handle slow loading on client
  - [x] callbacks, Promises, async/await
- [x] Handle errors from server on GET
- [x] Handle errors from server on POST
- [x] More on Express middleware and routers
  - [x] Making our own router
  - [x] Making a router constructor
  - [x] The express.json-mystery bug
- [x] Topic: React context

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
- `npm run dev` in root should run `server/server.ts` which runs `express`
- `npm i mongodb dotenv` and make MongoDB perform a query at start
- `npm check:typescript` should check server with typescript
- `npm test` should run a server test with supertest
