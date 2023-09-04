# Exercise 5: Code quality

In this exercise, you should take your previous code and add code quality tools to it. We will add the following:

- Prettier: Formatting your code in a consistent way
- Jest: Running automated tests
- Typescript: Static type verification of your code
- Eslint: Check for common coding errors

## Be prepared:

1. Make sure you have solved [exercise 3](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/blob/exercise/03/start/README.md)
   or exercise 4 before your start. You need to have a working React/Express application
2. In exercise 4 you added the `npm run build` command at the top level of your application. Make sure this works.

## Get ready

As you will run `npm run check` before `npm run build`, you need to make sure that `npm install` is executed on the
client and server together with the root project:

- At the root level, run `npm install` on client and server with the `postinstall` action:
  - `npm pkg set scripts.postinstall="npm run install:client && npm run install:server"`
  - `npm pkg set scripts.install:client="cd client && npm install --include=dev"`
  - `npm pkg set scripts.install:server="cd server && npm install --include=dev"`
- `npm run build` only has to run build in the client directory
  - `npm pkg set scripts.build="npm run build:client"`
  - `npm pkg set scripts.build:client="cd client && npm run build"`
- Make sure that `npm install` and `npm run build` works

## Prettier

- At the root level, install prettier
  - `npm install --save-dev prettier`
- Update the `npm run build` script to run `npm run check` before it builds on the client and server
  - `npm pkg set scripts.build="npm run check && npm run build:client"`
- Add a `npm run check` script which executes `npm run check:prettier`
  - `npm pkg set scripts.check="npm run check:prettier"`
- Add a `npm run check:prettier` script which executes `prettier --check .`
  - `npm pkg set scripts.check:prettier="prettier --check ."`

Try to execute `npm run check`. It will probably fail with some formatting errors. You can fix this automatically.

- Add a `npm run check` script which executes `prettier --write .`
  - `npm pkg set scripts.prettier="prettier --write ."`
- `npm run prettier`

You can set up Prettier in IntelliJ:

- File > Settings > Plugins > Marketplace: Search for Prettier and install it
- File > Settings > Languages & Frameworks > JavaScript > Prettier
  - Select the prettier installation (if not done automatically)
  - Check "On reformat action" and "On save" to automatically run Prettier
- Open a `package.json`-file and right-click on the editor. Select the option "Apply Prettier Code Style Rules"

**Tip:** The Apply Prettier Formatting Rules action seems to be broken with prettier 3.0+. A workaround is to
temporarily downgrade prettier:

1. `npm install prettier@2`
2. Right-click and select "Apply Prettier Code Style Rules"
3. `npm install prettier@latest`

## Jest

### For the server

- In the server directory add a `npm test` script which executes `jest`
  - `cd server`
  - `npm pkg set scripts.test="jest"`
- Install everything needed for the tests: `npm install --save-dev jest babel-jest @babel/preset-env supertest`
  - Jest is the actual test runner itself
  - babel-jest transforms old javascript code to new while running tests
  - @babel/preset-env lets the tests use the latest javascript syntax
  - supertest gives test helpers for express
- In `server/package.json` add configuration to let jest use babel to modify the code:
  ```
  "babel": {
    "presets": [
      "@babel/preset-env"
    ]
  }
  ```

You can now write tests:

1. First, extract the api methods for `/api/questions` to a separate file named `quizApi.js`.
   Use `export const questionApi = express.Router()` to create an [API router](https://expressjs.com/en/4x/api.html#router)
2. Second, write Jest tests in `server/__tests__/quizApi.test.js` using [supertest](https://www.npmjs.com/package/supertest)

### For the client

- In the client directory add a `npm test` script which executes `jest`
  - `cd client`
  - `npm pkg set scripts.test="jest"`
- Install everything needed for the tests: `npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer`
  - Jest is the actual test runner itself
  - babel-jest transforms old javascript code to new while running tests
  - @babel/preset-env lets the tests use the latest javascript syntax
  - @babel/preset-react lets the tests use the React JSX syntax
  - react-test-renderer lets you write tests that execute React code
- In `client/package.json` add configuration to let jest use babel to modify the code:
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

You can now write tests with `react-test-renderer`:

1. First, extract your components to a separate file
2. Second, write tests using `renderer.create`, `expect(...).toMatchSnapshot()`, `component.root.findBy...`
   `component.root.findBy...props.onChange()` and `jest.fn()`

### Tests at the top level

- At the root level, update the `npm run check` script to include tests
  - `npm pkg set scripts.check="npm run check:prettier && npm test"`
- Add a `npm test` script which executes `npm run test:client && npm run test:server`
  - `npm pkg set scripts.test="npm run test:client && npm run test:server"`
- Add a `npm run test:client` script which executes `npm test` in the client directory
  - `npm pkg set scripts.test:client="cd client && npm test"`
- Add a `npm run test:server` script which executes `npm test` in the server directory
  - `npm pkg set scripts.test:server="cd server && npm test"`

## Typescript

Typescript is incredibly useful. But it can be a bit tricky to set up. This is why we don't spend much time on it
in the course.

### For the server

- In the server directory add a `npm run typescript` script which executes `tsc --noEmit`
  - `cd server`
  - `npm pkg set scripts.typescript="tsc --noEmit"`
- Install typescript:
  - `npm install --save-dev typescript`
  - `npx tsc --init` to set up `tsconfig.json`
- Rename all `.js` files in server to `.ts`, including for the tests
- Run `npm run typescript` to detect problems and fix them
  - You will need to install type definitions for many libraries: `npm install --save-dev @types/supertest @types/express @types/body-parser @types/cookie-parser @types/jest`
  - You will need to change imports to not use file extensions
  - You need to define a `Question` type and update `question.ts` to use it:
    - `export const Questions: Question[] = ...`
    - `isCorrectAnswer(question: Question, answer: string)`
  - Typescript will also force you to deal with the fact that the user may send in an invalid question id

You should now try to get the tests to work:

- `npm install --save-dev ts-jest`
- `npx ts-jest config:init`
- Try to run the tests with `npm test`
- You will probably have to remove `"type": "module"` in `package.json`

Make `npm start` and `npm run dev` work:

- `npm install --save-dev ts-node ts-node-dev`
- `npm pkg set scripts.start="ts-node server.ts"`
- `npm pkg set scripts.dev="ts-node-dev server.ts"`

You can now `npm uninstall nodemon`.

### For the client

- In the client directory add a `npm run typescript` script which executes `tsc --noEmit`
  - `cd client`
  - `npm pkg set scripts.typescript="tsc --noEmit"`
- Install typescript:
  - `npm install --save-dev typescript`
  - `npx tsc --init` to set up `tsconfig.json`
- Rename all `.js` files to `.ts` and `.jsx` to `.tsx`, including for the tests
- `npm run typescript` and fix errors
  - In `tsconfig.json`, add the property `"jsx": "react"`
  - `npm install --save-dev @types/react @types/react-dom @types/react-test-renderer @types/jest`
  - You have to add quite a bit of typing, especially to component props

You should now try to get the tests to work:

- `npm install --save-dev ts-jest`
- `npx ts-jest config:init`
- Try to run the tests with `npm test`

Parcel is smart enough that it doesn't need any changes to work with Typescript.

### For the top level project

Here is how to set it up:

- At the root level, update the `npm run check` script to include typescript
  - `npm pkg set scripts.check="npm run check:prettier && npm run typescript && npm test"`
- Add a `npm run typescript` script which executes `npm run typescript:client && npm run typescript:server`
  - `npm pkg set scripts.typescript="npm run typescript:client && npm run typescript:server"`
- Add a `npm run typescript:client` script which executes `npm run typescript` in the client directory
  - `npm pkg set scripts.typescript:client="cd client && npm run typescript"`
- Add a `npm run typescript:server` script which executes `npm run typescript` in the server directory
  - `npm pkg set scripts.typescript:server="cd server && npm run typescript"`

Run `npm run check` to verify that everything is okay

## Eslint

Eslint checks your code for common mistakes. Here is how you set it up

Install eslint in the server directory:

- `cd server`
- `npm install --save-dev eslint`
- `npm init @eslint/config`
- Answer the questions to get it set up correctly
- `npm pkg set scripts.lint="eslint ."`
- `npm run lint` to check and fix problems
  - You will need to add `ignorePatterns: ["jest.config.js"]` to `.eslintrc.js`

Install eslint in the client directory:

- `cd client`
- `npm install --save-dev eslint`
- `npm init @eslint/config`
- Answer the questions to get it set up correctly
- `npm pkg set scripts.lint="eslint ."`
- `npm run lint` to check and fix problems
  - You will need to add `ignorePatterns: ["dist", "jest.config.js"]` to `.eslintrc.js`

Install eslint at the root level

- At the root level, update the `npm run check` script to include eslint
  - `npm pkg set scripts.check="npm run check:prettier && npm run typescript && npm run lint && npm test"`
- Add a `npm run lint` script which executes `npm run lint:client && npm run lint:server`
  - `npm pkg set scripts.lint="npm run lint:client && npm run lint:server"`
- Add a `npm run lint:client` script which executes `npm run lint` in the client directory
  - `npm pkg set scripts.lint:client="cd client && npm run lint"`
- Add a `npm run lint:server` script which executes `npm run lint` in the server directory
  - `npm pkg set scripts.lint:server="cd server && npm run lint"`

When you're done try to execute `npm run check` at the root level and verify that everything works
