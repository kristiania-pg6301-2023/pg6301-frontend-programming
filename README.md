# Exercise 4: Deployment to Heroku

In this exercise, you should take your previous code and deploy it to Heroku.

### Be prepared:

1. Make sure you have solved [exercise 3](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/blob/exercise/03/start/README.md)
   before your start. You need to have a working React/Express application
2. Make sure you are signed up for [GitHub Student Developer Pack](https://education.github.com/pack) so you
   don't have to pay for the hosting
3. Read through the documentation about [Heroku for GitHub Students](https://www.heroku.com/github-students) so 
   you understand how to avoid cloud bills

### Make your application ready for Heroku

1. Make sure `npm run build` at the top level works correctly (it should install `node_modules` and build `client/dist`)
2. Make sure `npm start` at the top level works correctly (it should start the server so you can access the React 
   application at http://localhost:3000)
3. Make sure `server/server.js` lets Heroku specify the port. The listen statement should look like this:
   `app.listen(process.env.PORT || 3000)`
4. Create a repository on GitHub and push your code there

### Create the Heroku app

1. Go to the [Heroku Dashboard](https://dashboard.heroku.com/apps)
2. Select New > Create New App
3. When your app is created, go to Deploy and select GitHub as the Deployment Method
4. Specify your GitHub repository under Manual deploy to make sure the app deploys the first time
5. Verify that the application is running
6. Specify your GitHub repository under Automatic deploy to make sure the app redeploys automatically
7. Make a change to your app, commit to git and push to GitHub
8. Verify that the change is deployed to Heroku
9. Share the link to your repositories to your classmates on 
   [Mattermost](https://mattermost.kristiania.no/it2022/channels/pg6301-webutvikling-og-api-design)

### Upcoming tasks

Here are some things you may want to work on:

* `<BrowserRouter />` won't refresh correctly when serving with Express
* We will need to use cookies pretty soon
* The next major topic is MongoDb with Atlas
* We need to work on code style (prettier), tests (jest) and correctness checks (eslint)