# Mock exam for PG6301 Web Development and API design, 2022

The exam for PG6301 is a practical test where you should demonstrate your mastery of the technologies and concepts that
have been thought in the course: React, Express, Heroku, Mongodb, Open ID Connect, Jest and Web sockets. The fact that
this is a practical exam means that you are evaluated on the functionality of the running code that you deliver, rather
than your theoretical mastery of the subjects

You can use [this GitHub classroom repository](https://classroom.github.com/a/zrIPRlqJ) to get a more realistic
experience of how you will need to use GitHub during the exam.

## The task

Show movies saved in a MongoDB with React. Let users log in with Active Directory. Logged-in users can add new movies to
the database. When a user adds a movie, other users should see a notification with WebSockets.

The application should be deployed on Heroku.

## Test your application

I suggest that you ask another student to check your application on Heroku and GitHub. When you evaluate your own or
your team's application you can do as follows:

1. Go to the GitHub page of the solution
3. Check that GitHub links to the deployed app on Heroku
4. Verify that you can log in to the app
5. Verify that you can add data
6. Verify that you can see the data you added
7. Check that you can modify the data

If you're smart, you construct the code of your app so that everything that has to do with movies can easily be replaced
with something else. Then you can reuse the code directly on the exam. This is especially relevant for
the `package.json`-files, `index.html` and `index.jsx`, login code, and `server.js`.

## Checklist of technologies you should include in your application

- [ ] Create and run the application
- [ ] Logon with Active Directory
- [ ] Jest tests
    - [ ] Snapshot tests
    - [ ] Simulate + jest.fn
    - [ ] Superagent for API
- [ ] Deployment to Heroku
- [ ] Mongodb
- [ ] Navigating in the application using React Router (remember Express Middleware)
- [ ] Reading data from the server (remember error handling)
- [ ] Writing data to the server
- [ ] Websockets
- [ ] Ok styling