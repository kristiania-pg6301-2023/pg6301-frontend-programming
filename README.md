# Lecture 9: Open ID Connect

Open ID Connect is a *protocol* for sharing authentication information between sites. It is a superset of the protocol
oauth.

With Open ID Connect, we can create a service (called an app) which uses an *identity provider* like Google, Active
Directory or Feide to authenticate the user.

## Plan

* [ ] Intro to authentication: Cookies
  * [ ] Set up a minimal React + Express application
    * [ ] [Set up React with Parcel](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/#creating-the-frontend-project)
    * [ ] [Set up Express](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/#converting-react-to-serve-from-express)
    * [ ] Make it work together
    * [ ] Create application layout
  * [ ] Setting a cookie in the browser
  * [ ] Reading the cookie
  * [ ] Signing the cookie to protect from tampering
* [ ] Registering a service with [Google as an identity provider](https://console.cloud.google.com/apis/credentials)
* [ ] Implementing a [client side authentication flow](https://developers.google.com/identity/protocols/oauth2#clientside)
  * [ ] Finding out where to redirect the user
  * [ ] Creating a redirect
  * [ ] Picking up the values from the callback
  * [ ] Fetching the token
  * [ ] Sending the token to the server
  * [ ] Using the token to authenticate the user
