# Mock exam for PG6301 Web Development and API design, 2022

The exam for PG6301 is a practical test where you should demonstrate your mastery of the technologies and concepts that
have been thought in the course: React, Express, Heroku, Mongodb, Open ID Connect, Jest and Web sockets. The fact that
this is a practical exam means that you are evaluated on the functionality of the running code that you deliver, rather
than your theoretical mastery of the subjects

## The task

Show movies saved in a MongoDB with React. Let users log in with Active Directory. Logged-in users can add new movies to
the database. When a user adds a movie, other users should see a notification with WebSockets.

The application should be built with GitHub Actions and report test coverage. It should be deployed on Heroku.

## Test your application

I suggest that you ask another student to check your application on Heroku and GitHub. When you evaluate your own or
your team's application you can do as follows:

1. Go to the GitHub page of the solution
2. Check the GitHub Action actions build and verify that you can see the coverage
3. Check that GitHub links to the deployed app on Heroku
4. Verify that you can log in to the app
5. Verify that you can add data
6. Verify that you can see the data you added

If you're smart, you construct the code of your app so that everything that has to do with movies can easily be replaced
with something else. Then you can reuse the code directly on the exam. This is especially relevant for
the `package.json`-files, `index.html` and `index.jsx`, login code, and `server.js`.

## Checklist of technologies you should include in your application

- [ ] Logon with Active Directory
- [ ] Jest tests
  - [ ] Snapshot tests
  - [ ] Simulate + jest.fn
  - [ ] Supertest
- [ ] GitHub Actions with coverage rapport
- [ ] Deployment to Heroku
- [ ] Mongodb
- [ ] Navigating in the application using React Router (remember Express Middleware)
- [ ] Reading data from the server (remember error handling)
- [ ] Writing data to the server
- [ ] Websockets
