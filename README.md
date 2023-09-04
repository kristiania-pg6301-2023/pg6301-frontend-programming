# PG6301 Web Development and API design

Welcome to this course in Web Development and API Design. In this course, we will
look at creating single-page applications with React backed by APIs implemented
with React. The application will store data in MongoDB and be deployed on Heroku

## Understanding the course

In this course, we expect you to become proficient at building web applications
with JavaScript, React and Express. During the lectures, you will see live coding
of how such applications may be constructed and many topics will be explained
along the way.

The course will not have slides, but all the lectures will be recorded and made
available on Canvas. Each lecture will consist of 10-15 commits which will be
available on GitHub for student's reference.

There are many topics that we believe are more suitable for self-study than
classroom explanations, and you will not always be shown how all topics are used
in a more general situation. *You will be expected to master some such topics
to get a top grade at the exam*. In order to be prepared for the exam, you have
to follow the lectures, but you also have to be able to solve new problems and
find relevant information along the way. To be able to do this, it's extremely
valuable for you to follow the exercises along the lectures.

The lectures will be recorded and the recordings will be available in Panopto in Canvas.

### From last year

The course was taught in
the [Spring of 2022 by Johannes Brodwall](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures)
and in the Fall of 2022 by Bogdan Marculescu. In 2021, the first half of this course was taught by
[Andrea Arcuri](https://github.com/arcuri82/web_development_and_api_design)
and the second half by
[Johannes Brodwall](https://github.com/kristiania-pg6301-2021/pg6301-react-and-express-lectures)

Lectures of 2023 that has a corresponding lecture in 2022 will have a reference to the code
from that year's lecture.

## Lectures

### Lecture 1: A tour of React, Express and Heroku

<details>

We explore the most important parts to the whole application up and running on
a server. This lecture will be *way too fast to understand* and will serve merely
as a teaser to topics that will be important through the course. After the
lecture, you will only be expected to know the basics of how to create a React
application with Parcel and React Router

* [Commit log from lecture (only available after lecture)](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/commits/lecture/01)
* [Reference implementation](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/tree/reference/01)
* [Exercise text](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/tree/exercise/01/start/README.md)
* [Exercise answer](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/commits/exercise/01/solution)

#### Material from 2022

* [Commit log from live coding](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/01)

</details>

### Lecture 2: React and Jest

<details>

We will review the React topics from the last lecture: Creating a React app,
creating functional components and using props, state and effects. We will
also explore React Router more in depth

See [Creating the frontend project](#creating-the-frontend-project) for a summary of the steps to set up the application

* [Commit log from lecture (only available after lecture)](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/commits/lecture/02)
* [Reference implementation](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/tree/reference/02)
* [Exercise text](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/tree/exercise/02/start/README.md)
* [Exercise solution](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/commits/exercise/02/solution)

#### Useful video

* [Fireship: React in 100 seconds](https://youtu.be/Tn6-PIqc4UM)

</details>


### Lecture 3: Implementing a React backend on Express

We will create an Express server which serves a React application that uses an API implemented in Express to implement functionality.
See [Convert to serve from Express](#converting-react-to-serve-from-express) on the steps to take the code from the previous lecture
to be served from Express.

We will look at routing in Express and user interaction and error handling in React.

* [Commit log from live coding](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/commits/lecture/03)
* [Reference implementation](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/commits/reference/03)
* [Exercise text](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/blob/exercise/03/start/README.md)
* [Exercise solution](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/commits/exercise/03/solution)

#### From 2022

* [Commit log from live coding](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/04)
* [Reference implementation](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/tree/reference/04)
* [Exercise text](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/blob/exercise/04/start/README.md)
* [Exercise answer](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/exercise/answer/04)

#### Useful videos

* [Fireship.io intro til Express](https://youtu.be/-MTSQjw5DrM)
* [Fireship: every React hook](https://youtu.be/TNhaISOUy6Q)

### Lecture 4: Publishing your application on Heroku

<details>

In this lecture, we will upload a simple web application to a cloud service and look at automatic deploys.
See [the steps to deploy to Heroku](#deploy-to-heroku)

If we have time, we will take a look at the details of `<BrowserRouter>`.

* [Commit log from live coding](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/commits/lecture/04)
* [Reference implementation](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/commits/reference/04)
* [Exercise text](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/blob/exercise/04/start/README.md)
* [Exercise solution](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/commits/exercise/04/solution)

* [Heroku's documentation on using Node.js](https://www.heroku.com/nodejs)
* [Heroku free credits for students](https://www.heroku.com/github-students)

#### Material from 2022

* [Commit log from live coding](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/05)
* [Reference implementation](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/tree/reference/05)
* [Exercise answer](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/exercise/answer/05)

</details>

### Lecture 5: Quality code

<details>

In this lecture, we will look at ways to make sure our code is good, from formatting, to linting, to testing.
We will look at the tools prettier, jest, and eslint and using GitHub to run our quality checks automatically.

Installing Jest can be tricky and is [described in the course notes](#testing)

* [Commit log from live coding](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/commits/lecture/05)
* [Reference implementation](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/commits/reference/05)
* [Exercise text](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/blob/exercise/05/start/README.md)
* [Exercise solution](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/commits/exercise/05/solution)

#### Material from 2022

* [Commit log from live coding](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/03)
* [Reference implementation](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/tree/reference/03)
* [Exercise answer](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/exercise/answer/03)

</details>


### Lecture 6: Storing data MongoDB

<details>

#### Material from 2022

* [Commit log from live coding](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/07)
* [Reference implementation](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/tree/reference/07)
* [Exercise answer](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/exercise/answer/07)

#### Useful links

* [MongoDB Skills](https://www.youtube.com/watch?v=0vPt7GI-2kc) - very useful and brief
* [MongoDB University: JavaScript](https://university.mongodb.com/courses/M220JS/about)
* [MongoDB in 100 seconds (Fireship.io)](https://www.youtube.com/watch?v=-bt_y4Loofg)

</details>

### Lecture 7: Who's your user? OpenID Connect

<details>

In this lecture we will implement "log in with Google"-functionality. We will also explore other identity
services that also implement OpenID Connect, such as ID-porten and Active Directory.

#### Material from 2022

* [Commit log from live coding](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/08)
* [Reference implementation](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/tree/reference/08)

#### Useful links

* [Johannes' talk on OpenID Connect from NDC 2021](https://www.youtube.com/watch?v=CX8UfflxVMI)
* [Google Developer Console](https://console.cloud.google.com/apis/credentials)
* [Google Authentication documentation](https://developers.google.com/identity/protocols/oauth2#clientside)

</details>

### Lecture 8: Robust interaction between the client and the server

<details>

(May be merged with lecture 3 this year)

* [Commit log from live coding 2022](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/06)
* [Reference implementation 2022](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/tree/reference/06)
* [Exercise answer 2022](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/exercise/answer/06)

</details>

### Lecture 9: Web Sockets

<details>

The purpose of web sockets is to enable responsive communication between the client
and the server; especially for messages sent by the server. Websockets are established
over HTTP, just like normal requests, but they keep the socket open for either
party (client or server) to send arbitrary messages. In many cases, these messages
are sent as JSON objects.

In our example, we will create a web application that lets users chat with each
other.

#### Material from 2022

* [Commit log from live coding](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/09)
* [Reference implementation](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/tree/reference/09)

#### Useful links

* [Fireship.io video on Websockets](https://www.youtube.com/watch?v=1BfCnjr_Vjg)

</details>

### Lecture 10: Jest testing

<details>

In this lecture, we continue from lecture 7 (MongoDB) and add tests for frontend and for MongoDB

#### Material from 2022

* [Commit log from live coding](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/10)
* [Reference implementation](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/tree/reference/10)

#### Useful links

* [Fireship.io video on Async/await and promises](https://www.youtube.com/watch?v=vn3tm0quoqE)

</details>

### Lecture 11: OpenID Connect and Active Directory

<details>

In this lecture, I will demonstrate how to set up an already created OpenID Connect server with Active Directory, then
implement the necessary steps using another ID-provider, so the exact code is left as an exercise

#### Material from 2022

* [Commit log from live coding](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/11)
* [Reference implementation](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/tree/reference/11)

</details>

### Lecture 12: Getting ready for the exam

<details>

We examine a solution that probably would qualify for a B on the exam

#### Material from 2022

* [Reference implementation](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/tree/reference/12)
* [Commit log from live coding](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/12)
* [Mock Exam](./mock-exam.md)

</details>

## Reference material

The target for the course is a project with a frontend in React and a backend in Express. These instructions
show how to create it from scratch.

After all the steps, you will have a resulting structure that looks something like this:

```
<root-directory>/
  client/
    .parcel-cache/   # temporary files generated by parcel (add to .gitignore. Delete if parcel behaves strange)
    dist/            # The output from the build process - generated by parcel (add to .gitignore)
    node_modules/    # The local copy of dependencies - generated by npm (add to .gitignore)
    package.json     # Contains scripts to run and dependencies
    index.html       # The starting point for the client code
    index.jsx        # The starting point for React
  server/
    node_modules/    # The local copy of dependencies - generated by npm (add to .gitignore)
    package.json     # Contains scripts to run and dependencies
    server.js        # The starting point for the server
  node_modules/    # The local copy of dependencies - generated by npm (add to .gitignore)
  package.json       # Scripts to run both client and server in combination
```


### Creating the frontend project

1. Create a new directory. In IntelliJ, you can use File > New > Project. I recommend creating an Empty project
2. When creating a project, make sure you add `node_modules`, `.parcel-cache` and `dist` to `.gitignore`
3. Create a subdirectory for the client (`mkdir client`)
4. In the client directory, create the `package.json` file and add dependencies with the following commands
   1. `cd client`
   2. `npm init -y`
   3. `npm install --save-dev parcel`
   4. `npm install --save react react-dom react-router-dom`
5. Set up the "dev" command to run parcel
   * `npm pkg set scripts.dev="parcel serve index.html"`
6. You can now run `npm run dev`, although this will fail until you create an index.html-file (next step)

### Creating the initial React application files

1. Create a minimal HTML file as `client/index.html`. This is the essence:
   ```html
   <html lang="en">
      <body>
        <div id="root"></div>
      </body>
      <script src="index.jsx" type="module"></script>
   </html>
   ```
2. Create a minimal `index.jsx`:
   ```jsx
   import React from "react";
   import ReactDOM from "react-dom/client";
   
   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(<h1>Hello React</h1>);
    ```

You can now start working with React. Start by replacing `<h1>Hello React</h1>` with your own component. For example:

```jsx
// ... continued from above
root.render(<Application />);

function Application() {
    const [counter, setCounter] = useState(0);
    return <>
       <h2>Welcome to my application</h2>
       <div><button onClick={() => setCounter(oldValue => oldValue+1)}>Click me</button></div>
       <div>You have clicked {counter} times</div>
    </>;
}
 ```

### Converting react to serve from express 

1. Create a subdirectory on the top level (next to the `client` directory): `mkdir server`
2. In the server directory, create the `package.json` file and add dependencies with the following commands:
   1. `cd server`
   2. `npm init -y`
   3. `npm install --save-dev nodemon`
   4. `npm install --save express body-parser`
3. Set up the "dev" command to run express
   * `npm pkg set scripts.dev="nodemon server.js"`
4. Set the property `type` to `module` in `package.json`
   * `npm pkg set type="module"`
5. You can now run `npm run dev` in the server directory, although this will fail until you create a server.js-file 
   (next step)
6. You should update the client project. Instead of `parcel` running the server ("parcel serve"), it should just
   "watch" for changes and output the contents of the `dist` directory
   * `cd ../client`
   * `npm pkg set scripts.dev="parcel watch index.html"`

#### Create a minimal `server.js`

This file serves code from `../client/dist` with Express, running on port 3000. After you execute `npm run dev`,
you can access it at http://localhost:3000

```js
import express from "express";

const app = express();
app.use(express.static("../client/dist"))
app.listen(3000);
```

When you can get this to work, you will need to master the following:

* Serve the frontend code from Express. In `server.js`:
   * `app.use(express.static(path.resolve(__dir, "..", "..", "dist")));`
* Make Express respond to API calls
* Make React call API calls on the backend (using `fetch`)

### Making the top level project work smoother

With the instructions above, you have to use two terminal windows, one for client and one for server.
You can set up the top level directory above `client` and `server` to run both concurrently:

1. Execute the following in the top level directory (above `client` and `server`)
2. Make `npm run dev` at top level run the same command in both subdirectories concurrently
    1. `npm init -y`
    2. `npm install --save-dev concurrently`
    3. `npm pkg set scripts.dev="concurrently npm:dev:client npm:dev:server"`
    4. `npm pkg set scripts.dev:client="cd client && npm run dev"`
    5. `npm pkg set scripts.dev:server="cd server && npm run dev"`


### Deploy to Heroku

<details>

Heroku is a cloud based Platform-as-a-Service (PaaS) that is extremely easy to use to host Node applications, like our
Express server. They require paying for deployments, but with [GitHub Student Developer Pack](https://education.github.com/pack)
you [get credits to use Heroku for free](https://www.heroku.com/github-students)


1. In the root project make sure `npm install` is run at `postinstall`
   * `npm pkg set scripts.postinstall="npm run install:client && npm run install:server"`
   * `npm pkg set scripts.install:client="cd client && npm install --include=dev"`
   * `npm pkg set scripts.install:server="cd server && npm install --include=dev"`
2. In the root project, define `npm run build` and `npm start`
   * `npm pkg set scripts.build="npm run build:client"`
   * `npm pkg set scripts.build:client="cd client && npm run build"`
   * `npm pkg set scripts.start "cd server && npm start"`
3. In the client project, define `npm run build`
   * `cd client`
   * `npm pkg set scripts.build="parcel build index.html"`
   * `cd ..`
4. In the server project, define `npm start`
   * `cd server`
   * `npm pkg set scripts.start="node server.js"`
   * `cd ..`
5. In the server project, update `server.js` to let Heroku inject the server port as an environment variable:
   ```js
   app.listen(process.env.PORT || 3000);
   ```
6. Create an application and deploy to heroku 
   1. Sign up at the [Heroku Dashboard](https://dashboard.heroku.com/apps/)
   2. [Create a new Heroku app](https://dashboard.heroku.com/new-app)
   3. Under Deployment for your new app, select GitHub as the deployment method and select your repository
   4. Select the branch you wish to deploy
   5. Under Manual Deploy, select your branch and press Deploy for the first time deployment
   6. Watch the build log to see errors and try to correct them
   7. Press "Open app" to see your app running
   8. Enable Automatic deploys to make sure every change get deployed
7. You can see the deployment log under Activity in the Heroku Dashboard for your app

Common problems:

* "sh: 1: parcel: not found": This means that you ran `npm install` instead of `npm install --include=dev` on the `client` project
* Strange error message during `npm run build`: It's possible that parcel or some library that parcel uses had a short-lived bug. Search the web for the error message
  and see if you should `override` some dependency. Alternatively, use an older version of `parcel`


</details>


### Crucial tasks

#### React Router

<details>

```jsx
export function MoviesApplication() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FrontPage/>}/>
            <Route path={"/movies/*"} element={<Movies/>}/>
        </Routes>
    </BrowserRouter>;
}

function Movies() {
    return <Routes>
        <Route path={""} element={<ListMovies movies={movies}/>}/>
        <Route path={"new"} element={<NewMovie onAddMovie={handleAddMovie}/>}/>
    </Routes>
}

function FrontPage() {
    return <div>
        <h1>Front Page</h1>
        <ul>
            <li><Link to={"/movies"}>List existing movies</Link></li>
            <li><Link to={"/movies/new"}>Add new movie</Link></li>
        </ul>
    </div>;
}
```
</details>

#### Express middleware for dealing with BrowserRouter

<details>

When you use `<BrowserRouter>` in React, the server must be prepared for unknown URLs. When the user
reloads the browser, the browser will request URLs that are intended to be resolved on the client.
The following defaults unknown requests to return `index.html`.

```javascript
app.use((req, res, next) => {
    if (req.method === "GET") {
        // TODO: We probably should return 404 instead of index.html for api-calls as well
        res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"));
    } else {
        next();
    }
});
```
</details>

### Fetching data from server

#### The useLoading hook

<details>

```javascript
export function useLoading(loadingFunction, deps = []) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState();

    async function load() {
        setLoading(true);
        setData(undefined);
        setError(undefined);
        try {
            setData(await loadingFunction());
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(load, deps);
    return {loading, data, error};
}
```
</details>



### Testing

#### Installing

Installing Jest is described on [the Jest homepage](https://jestjs.io/docs/tutorial-react)

<details>

1. `npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer`
2. Add the following to `client/package.json` to support JSX-files
   ```
   "babel": {
     "presets": [
       "@babel/preset-env",
       [
         "@babel/preset-react",
         {
           "runtime": "automatic"
         }
       ]
     ]
   }
   ```
3. `npm pkg set scripts.test=jest` (also, consider `npm pkg set scripts.test:watch="jest --watchAll"`)
4. `npm test`

Out of the box, Jest will fail on `import "./....css"` in your JSX files.
[By installing a moduleNameMapper](https://stackoverflow.com/a/50075709/27658),
you can fix this problem.

</details>

#### A trivial test (failing)

<details>

```javascript
import renderer, {act} from "react-test-renderer";

describe("quiz application", () => {
  it("knows the answer to the question... (failing)", () => {
    expect(6 * 9).toEqual(42);
  });
  
  it("renders React", () => {
     const component = renderer.create(<h1>Hello world</h1>);
     expect(component).toMatchSnapshot();      
  });
});
```
</details>

#### Snapshot testing - check that a view is rendered correctly

<details>

```javascript
  it("matches snapshot", async () => {
    let component;
    await act(async () => {
      component = renderer.create(
              <MemoryRouter initialEntries={["/"]}>
                 <MoviesRoutes fetchMovies={() => movies} />,
              </MemoryRouter>,
      );
    });
    expect(component).toMatchSnapshot();
    expect(
           component.root.findAllByType("h3").map((c) => c.children.join(" ")),
    ).toEqual(["Barbie", "Oppenheimer"]);
  });
```
</details>

#### Simulate events

<details>

```javascript
  it("handles event", () => {
      const handleClick = jest.fn();
      const component = renderer.create(
              <button onClick={() => handleClick(123)}>Click me</button>,
      );
      component.root.findAllByType("button")[0].props.onClick();
      expect(handleClick).toBeCalledWith(123);
   });
```
</details>

#### Using supertest to check server side behavior

<details>

***Setup***:

1. `npm install --save-dev jest babel-jest @babel/preset-env supertest`
2. Add the following to `server/package.json`
   ```
   "babel": {
    "presets": [
      "@babel/preset-env"
    ]
   }
   ```


To test a bookApi defined in `server/booksApi.js` like this:

```javascript
import express from "express";

export const booksApi = new express.Router();
booksApi.get(":id", (req, res) => {
    // ...
});
```

you can use a test in `server/__tests__/booksApi.test.js` like this:

```javascript
import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import { booksApi } from "../booksApi";

const app = express();
app.use(bodyParser.json());
app.use(booksApi);

describe("...", () => {

    it("can update existing books", async () => {
        const book = (await request(app).get("/2")).body;
        const updated = {
            ...book,
            author: "Egner",
        };
        await request(app).put("/2").send(updated).expect(200);
        await request(app)
            .get("/2")
            .then((response) => {
                expect(response.body).toMatchObject({
                    id: 2,
                    author: "Egner",
                });
            });
    });

});
```

</details>

## WebSockets

### Client side:

<details>

```javascript
    // Connect to ws on the same host as we got the frontend (support both http/ws and https/wss)
const ws = new WebSocket(window.location.origin.replace(/^http/, "ws"));
// log out the message and destructor the contents when we receive it
ws.onmessage = (msg) => {
    console.log(msg);
    const {username, message, id} = JSON.parse(msg.data);
};
// send a new message
ws.send(JSON.stringify({username: "Myself", message: "Hello"}));
```
</details>

### Server side

<details>

```javascript

import {WebSocketServer} from "ws";

// Create a websocket server (noServer means that express
// will provide the listen port)
const wsServer = new WebSocketServer({noServer: true});

// Keep a list of all incomings connections
const sockets = [];
let messageIndex = 0;
wsServer.on("connection", (socket) => {
    // Add this connection to the list of connections
    sockets.push(socket);
    // Set up the handling of messages from this sockets
    socket.on("message", (msg) => {
        // Destructor the incoming message
        const {username, message} = JSON.parse(msg);
        // Add fields from server side
        const id = messageIndex++;
        // broadcast a new message to all recipients
        for (const recipient of sockets) {
            recipient.send(JSON.stringify({id, username, message}));
        }
    });
});

// Start express app
const server = app.listen(3000, () => {
    // Handle incoming clients
    server.on("upgrade", (req, socket, head) => {
        wsServer.handleUpgrade(req, socket, head, (socket) => {
            // This will pass control to `wsServer.on("connection")`
            wsServer.emit("connection", socket, req);
        });
    });
});
```
</details>

## OpenID Connect - Log on with Google

### Client side (implicit flow)

<details>

"Implicit flow" means that the login provider (Google) will not require a client secret to complete the authentication.
This is often not recommended, and for example Active Directory instead uses another mechanism called PKCE, which
protects against some security risks.

1. Set up the application in [Google Cloud Console](https://console.cloud.google.com/apis/credentials). Create a new
   OAuth client ID and select Web Application. Make sure `http://localhost:3000` is added as an Authorized JavaScript
   origin and `http://localhost:3000/callback` is an authorized redirect URI
2. To start authentication, redirect the browser (see code below)
3. To complete the authentication, pick up the `access_token` when Google redirects the browser back (see code below)
4. Save the `access_token` (e.g. in `localStorage`) and add as a header to all requests to backend

</details>

#### Redirect the client to authenticate

<details>

```javascript
export function Login() {
    async function handleStartLogin() {
        // Get the location of endpoints from Google
        const {authorization_endpoint} = await fetchJson(
            "https://accounts.google.com/.well-known/openid-configuration"
        );
        // Tell Google how to authentication
        const query = new URLSearchParams({
            response_type: "token",
            scope: "openid profile email",
            client_id:
                "<get this from Google Cloud Console>",
            // Tell user to come back to http://localhost:3000/callback when logged in
            redirect_uri: window.location.origin + "/callback",
        });
        // Redirect the browser to log in
        window.location.href = authorization_endpoint + "?" + query;
    }

    return <button onClick={handleStartLogin}>Log in</button>;
}
```

In the case of Active Directory, you also need
parameters `response_type: "code"`, `response_mode: "fragment"`, `code_challenge_method` and `code_challenge` (the
latest two are needed for PKCE).
</details>

#### Handle the authentication callback

<details>

```javascript

// Router should take user here on /callback
export function CompleteLoginPage({onComplete}) {
    // Given an URL like http://localhost:3000/callback#access_token=sdlgnsoln&foo=bar,
    //  window.location.hash will give the part starting with "#"
    //  ...substring(1) will remove the "#"
    //  and Object.fromEntries(new URLSearchParams(...)) will parse it into an object
    // In this case, hash = { access_token: "sdlgnsoln", foo: "bar" }
    const hash = Object.fromEntries(
        new URLSearchParams(window.location.hash.substr(1))
    );
    // Get the values returned from the login provider. For Active Directory,
    // this will be more complex
    const {access_token, error} = hash;
    useEffect(() => {
        // Send the access token back to the outside application. This should
        //  be saved to localStorage and then redirect the user
        onComplete({access_token});
    }, [access_token]);

    if (error) {
        // deal with the user failing to log in or to give consent with Google
    }

    return <div>Completing loging...</div>;
}
```

For Active Directory, the hash will instead include a `code`, which you will then need to send to the `token_endpoint`
along with the `client_id` and `redirect_uri` as well as `grant_type: "authorization_code"` and the `code_verifier`
value from PKCE. This call will return the `access_token`.
</details>

#### Handle access_token on the backend

<details>

```javascript

app.use(async (req, res, next) => {
    const authorization = req.header("Authorization");
    if (authorization) {
        const {userinfo_endpoint} = await fetchJSON(
            "https://accounts.google.com/.well-known/openid-configuration"
        );
        req.userinfo = await fetchJSON(userinfo_endpoint, {
            headers: {authorization},
        });
    }
    next();
});

app.get("/profile", (req, res) => {
    if (!req.userinfo) {
        return res.send(200);
    }
});
```

</details>
