# PG6301 Web Development and API design

> :warning: **Not completely updated for 2023**: This information currently contains
> much of the course information for 2022. It will be updated as we go along


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

We explore the most important parts to the whole application up and running on
a server. This lecture will be *way too fast to understand* and will serve merely
as a teaser to topics that will be important through the course. After the
lecture, you will only be expected to know the basics of how to create a React
application with Parcel and React Router

* [Commit log from lecture (only available after lecture)](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/commits/lecture/01)
* [Reference implementation](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/tree/reference/01)
* [Exercise text](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/tree/exercise/start/01/README.md)
* [Exercise answer](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/commits/exercise/answer/01)

#### Material from 2022

* [Commit log from live coding](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/01)

### Lecture 2: React and Jest

We will review the React topics from the last lecture: Creating a React app,
creating functional components and using props, state and effects. We will
also explore React Router more in depth

### Lecture 3: Implementing server code on Express

* [Commit log from live coding 2022](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/04)
* [Reference implementation 2022](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/tree/reference/04)
* [Exercise text 2022](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/blob/exercise/04/start/README.md)
* [Exercise answer 2022](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/exercise/answer/04)

#### Useful video

* [Fireship.io intro til Express](https://youtu.be/-MTSQjw5DrM)

#### Useful video

[Fireship: React in 100 seconds](https://youtu.be/Tn6-PIqc4UM)

* [Fireship: every React hook](https://youtu.be/TNhaISOUy6Q)

### Lecture 4: Robust interaction between the client and the server

(May be merged with lecture 3 this year)

* [Commit log from live coding 2022](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/06)
* [Reference implementation 2022](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/tree/reference/06)
* [Exercise answer 2022](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/exercise/answer/06)


### Lecture 5: Publishing your application on Heroku

#### Material from 2022

* [Commit log from live coding](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/05)
* [Reference implementation](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/tree/reference/05)
* [Exercise answer](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/exercise/answer/05)
* [Heroku's documentation on using Node.js](https://www.heroku.com/nodejs)

### Lecture 6: Code quality

Jest, Github Actions, Prettier, Eslint, Supertest and Typescript

#### Material from 2022

* [Commit log from live coding](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/03)
* [Reference implementation](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/tree/reference/03)
* [Exercise answer](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/exercise/answer/03)


### Lecture 7: Storing data MongoDB

#### Material from 2022
* 
* [Commit log from live coding](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/07)
* [Reference implementation](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/tree/reference/07)
* [Exercise answer](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/exercise/answer/07)

#### Useful links

* [MongoDB Skills](https://www.youtube.com/watch?v=0vPt7GI-2kc) - very useful and brief
* [MongoDB University: JavaScript](https://university.mongodb.com/courses/M220JS/about)
* [MongoDB in 100 seconds (Fireship.io)](https://www.youtube.com/watch?v=-bt_y4Loofg)

### Lecture 8: Who's your user? OpenID Connect

In this lecture we will implement "log in with Google"-functionality. We will also explore other identity
services that also implement OpenID Connect, such as ID-porten and Active Directory.

#### Material from 2022

* [Commit log from live coding](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/08)
* [Reference implementation](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/tree/reference/08)

#### Useful links

* [Johannes' talk on OpenID Connect from NDC 2021](https://www.youtube.com/watch?v=CX8UfflxVMI)
* [Google Developer Console](https://console.cloud.google.com/apis/credentials)
* [Google Authentication documentation](https://developers.google.com/identity/protocols/oauth2#clientside)

### Lecture 9: Web Sockets

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

### Lecture 10: Jest testing

In this lecture, we continue from lecture 7 (MongoDB) and add tests for frontend and for MongoDB

#### Material from 2022

* [Commit log from live coding](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/10)
* [Reference implementation](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/tree/reference/10)

#### Useful links

* [Fireship.io video on Async/await and promises](https://www.youtube.com/watch?v=vn3tm0quoqE)

### Lecture 11: OpenID Connect and Active Directory

In this lecture, I will demonstrate how to set up an already created OpenID Connect server with Active Directory, then
implement the necessary steps using another ID-provider, so the exact code is left as an exercise

#### Material from 2022

* [Commit log from live coding](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/11)
* [Reference implementation](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/tree/reference/11)

### Lecture 12: Getting ready for the exam

We examine a solution that probably would qualify for a B on the exam

#### Material from 2022

* [Reference implementation](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/tree/reference/12)
* [Commit log from live coding](https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/lectures/12)
* [Mock Exam](./mock-exam.md)

## Reference material

When creating a project, make sure you add `node_modules`, `.parcel-cache` and `dist` to `.gitignore`

### Quickly creating an Express + React application

1. `mkdir client server`
2. Root project
    1. `npm init -y && npm install --save-dev concurrently`
    2. `npm pkg set scripts.dev "concurrently npm:dev:client npm:dev:server"`
    3. `npm pkg set scripts.dev:client "cd client && npm run dev"`
    4. `npm pkg set scripts.dev:server "cd server && npm run dev"`
3. Server project
    1. `cd server && npm init -y && npm install --save-dev nodemon && npm install --save express cookie-parser body-parser`
    2. `npm pkg set scripts.dev "nodemon server.js"`
    3. `cd ..`
4. Client project
    1. `cd client && npm init -y && npm install --save-dev parcel && npm install --save react react-dom react-router-dom`
    2. `npm pkg set scripts.dev "parcel watch index.html"`

### Making `npm run dev` work

1. Create a minimal HTML file as `client/index.html`. This is the essence:
   ```html
   <html>
      <body>
        <div id="root"></div>
      </body>
      <script src="index.jsx" type="module"></script>
   </html>
   ```
    * ``
2. Create a minimal `index.jsx`. In addition to importing React and ReactDOM, this is the essence:
   ```jsx
   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(<h1>Hello React</h1>);
    ```
3. Set `"type": "module"` in `server/package.json`
4. Create a minimal JavaScript file as `server.js`. This is the essence:
   ```js
   import express from "express";
   
   const app = express();
   app.use(express.static("../client/dist"))
   app.listen(process.env.PORT || 3000);
   ```

### Deploy to Heroku

1. In the root project, define `npm run build` and `npm start`
    * `npm pkg set scripts.build "npm run build:client && npm run build:server"`
    * `npm pkg set scripts.build:client "cd client && npm run build"`
    * `npm pkg set scripts.build:server "cd server && npm run build"`
    * `npm pkg set scripts.start "cd server && npm start"`
2. In the client project, define `npm run build`
    * `cd client && npm pkg set scripts.build "npm install --include=dev && npm run build:parcel" && npm pkg set scripts.build:parcel "parcel build index.html"`
    * `cd ..`
3. In the server project, define `npm run build` and `npm start`
    * `cd server && npm pkg set scripts.build "npm install" && npm pkg set scripts.start "node server.js"`
    * `cd ..`
4. Create an application and deploy to heroku (requires [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli))
    1. `heroku login`
    2. `heroku create -a <app name>`
    3. `heroku git:remote -a <app name>`
    4. `git push heroku`

### Crucial tasks

When you can get this to work, you will need to master the following:

* Serve the frontend code from Express. In `server.js`:
    * `app.use(express.static(path.resolve(__dir, "..", "..", "dist")));`
* Use React Router in front-end
* Make React call API calls on the backend (using `fetch`)
* Make Express respond to API calls

#### React Router

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

#### Express middleware for dealing with routing

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

### Fetching data from server

#### The useLoading hook

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

### Testing

#### Installing

When using test, we need to add some babel mumbo jumbo to get Jest to understand modern JavaScript syntax as well as JSX
tags

1. `npm install -D jest babel-jest`

You need the following fragment or similar in `package.json`:

```
  "babel": {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "node": "current"
          }
        }
      ],
      "@babel/preset-react"
    ]
  }
```

With this in place, it should be possible to run tests like those below.

#### Snapshot testing - check that a view is rendered correctly

```javascript
  it("loads book", async () => {
    // Fake data instead of calling the real backend
    const getBook = () => ({
        title: "My Book",
        author: "Firstname Lastname",
        year: 1999,
    });
    // Construct an artification dom element to display the app (with jsdom)
    const container = document.createElement("div");
    // The act method from react-dom/test-utils ensures that promises are resolved
    //  - that is, we wait until the `getBook` function returns a value
    await act(async () => {
        await ReactDOM.render(
            <!-- construct an object with the necessary wrapping - in our case, routing -->
            <MemoryRouter initialEntries={["/books/12/edit"]}>
                <Route path={"/books/:id/edit"}>
                    <!-- use shorthand properties to construct an api object with
                      getBook property with the getBook function
                      -->
                    <EditBookPage bookApi={{getBook}}/>
                </Route>
            </MemoryRouter>,
            container
        );
    });
    // Snapshot tests fail if the page is changed in any way - intentionally or non-intentionally
    expect(container.innerHTML).toMatchSnapshot();
    // querySelector can be used to find dom elements in order to make assertions
    expect(container.querySelector("h1").textContent).toEqual("Edit book: My Book")
});
```

#### Simulate events

```javascript
  it("updates book on submit", async () => {
    const getBook = () => ({
        title: "My Book",
        author: "Firstname Lastname",
        year: 1999,
    });
    // We create a mock function. Instead of having functionality,
    // this fake implementation of updateBook() lets us record and
    // make assertions about the calls to the function
    const updateBook = jest.fn();
    const container = document.createElement("div");
    await act(async () => {
        await ReactDOM.render(
            <MemoryRouter initialEntries={["/books/12/edit"]}>
                <Route path={"/books/:id/edit"}>
                    <EditBookPage bookApi={{getBook, updateBook}}/>
                </Route>
            </MemoryRouter>,
            container
        );
    });

    // The simulate function lets us create artificatial events, such as
    // a change event (which will trigger the `onChange` handler of our 
    // component
    Simulate.change(container.querySelector("input"), {
        // The object we pass must work with e.target.value in the event handler
        target: {
            value: "New Value",
        },
    });
    Simulate.submit(container.querySelector("form"));
    // We check that the call to `updateBook` is as expected
    // The value "12" is from MemoryRouter intialEntries
    expect(updateBook).toHaveBeenCalledWith("12", {
        title: "New Value",
        author: "Firstname Lastname",
        year: 1999,
    });
});
```

#### Using supertest to check server side behavior

```javascript
const request = require("supertest");
const express = require("express");

const app = express();
app.use(require("body-parser").json());
app.use(require("../src/server/booksApi"));

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

## WebSockets

### Client side:

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

### Server side

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

## OpenID Connect - Log on with Google

### Client side (implicit flow)

"Implicit flow" means that the login provider (Google) will not require a client secret to complete the authentication.
This is often not recommended, and for example Active Directory instead uses another mechanism called PKCE, which
protects against some security risks.

1. Set up the application in [Google Cloud Console](https://console.cloud.google.com/apis/credentials). Create a new
   OAuth client ID and select Web Application. Make sure `http://localhost:3000` is added as an Authorized JavaScript
   origin and `http://localhost:3000/callback` is an authorized redirect URI
2. To start authentication, redirect the browser (see code below)
3. To complete the authentication, pick up the `access_token` when Google redirects the browser back (see code below)
4. Save the `access_token` (e.g. in `localStorage`) and add as a header to all requests to backend

#### Redirect the client to authenticate

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

#### Handle the authentication callback

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

#### Handle access_token on the backend

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

