# Lecture 9: Open ID Connect

Open ID Connect is a *protocol* for sharing authentication information between sites. It is a superset of the protocol
oauth.

With Open ID Connect, we can create a service (called an app) which uses an *identity provider* like Google, Active
Directory or Feide to authenticate the user.

## Plan

* [x] Intro to authentication: Cookies
  * [x] Set up a minimal React + Express application
    * [x] [Set up React with Parcel](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/#creating-the-frontend-project)
    * [x] [Set up Express](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/#converting-react-to-serve-from-express)
    * [x] Make it work together
    * [x] Create application layout
  * [x] Setting a cookie in the browser
  * [x] Reading the cookie
  * [x] Signing the cookie to protect from tampering
  * [x] Polish
* [ ] Registering a service with [Google as an identity provider](https://console.cloud.google.com/apis/credentials)
* [ ] Implementing a [client side authentication flow](https://developers.google.com/identity/protocols/oauth2#clientside)
  * [ ] Finding out where to redirect the user
  * [ ] Creating a redirect
  * [ ] Picking up the values from the callback
  * [ ] Fetching the token
  * [ ] Sending the token to the server
  * [ ] Using the token to authenticate the user
