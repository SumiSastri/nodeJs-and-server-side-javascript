# What is express.js?

Express is a lightweight back-end server for local-testing/ deployment of apps.

It is used with the Node module system and follows the CommonJS syntax. It also has it's own syntax and HTTP utility methods and middleware to make creating API REST routes quick and easy.

To use the ExpressJS framework, it needs to be installed into a project with npm or nvm. The folder intantiated with node and then the package installed.

For the client-side static files and the dynamic data from the server to be connected to each other, node needs to be instantiated in the folders and files.

`npm init - y`

Once you have node you have a package-JSON file you can now install express.

`npm install express --save`

In the package-JSON make sure your main file is set to the name that you have given your express server - `server.js` in the demo-app example and set up your start-scripts `"start": "node server.js"` for the demo-app.

## Setting up the back-end server and middware

A vanilla server can be quickly spun-up using the easy to follow documentation to get started.

Documentation getting started: [https://expressjs.com/en/starter/hello-world.html]

Using the require method from Common JS, the library is imported and used. The App object has its own methods.

Documentation of all the methods available: [https://expressjs.com/en/4x/api.html#app]

A local-host port is assigned the `app.get()` method is set up with a request and response to test the port is displaying the information.

```
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
```

The `app.listen()` method allows you to check if the port is listening and accepting changes. It binds and listens for connections on the specified host and port. The method returns a HTTP server object.

The `app.use()` method takes the static files you are going to use to connect the back-end and front-end.

`app.use(express.static(__dirname));`

Documentation[https://expressjs.com/en/4x/api.html#app.listen]

Instead of writing code in nodes in the document, express methods help route responses and requests to and from the servers' databases to the front-end.

This backend routing of the data happens through API calls and routing of URLs that are not visible to the end-user.

## REST routes with Express

Routes on the back end are the request for data from a database (or filepath) and the returing of this data in the response.

To set up REST API calls and routes associated with those calls, the express function and the router method need to be imported into a module.

```
const express = require('express');
const router = express.Router();
```

The Express Router also has its own methods but to run routes, it is the Express App methods that are used.

`app.get()` - gets resources from the FE or a dB on a request
`app.post()` - publishes the data either on the FE or to the dB
`app.put()` - updates the data either on the FE or the dB
`app.delete()` - deletes data either on the FE or dB

## Request and response methods

The request methods that are frequently used are `req.body` or the body of the data, `req.cookies()` for cookie drops, `req.params()` are some of the commonly used methods - Documentation [https://expressjs.com/en/4x/api.html#req]

Response methods, some useful methods are `res.send()` to send the response back, `res.download()` to download resources, `res.redirect()` to redirect resources - Documentation [https://expressjs.com/en/4x/api.html#res]

## More on Express midware

`app.use()` is the method to consume all midware

- json parses incoming requests with JSON payloads. Documentation[https://expressjs.com/en/4x/api.html#express.json]
- static files serves static assets such as HTML files, images. Documentation [https://expressjs.com/en/4x/api.html#express.static]
- url encloded parses incoming requests with URL-encoded payloads Documentation[https://expressjs.com/en/4x/api.html#express.urlencoded]
- error [https://expressjs.com/en/guide/error-handling.html]
- the way that the midware is stacked is important - the error midware needs to be last
- error midware to custom handle errors is best used just above `app.listen()` if there is no explicit handler, express uses its own handler
- third-party midware like cors, favicon, etc., can be added documentation for each shows you how to import the third party library and use it with the methods available [https://expressjs.com/en/guide/using-middleware.html#middleware.third-party] as well as a cheatsheet[https://expressjs.com/en/resources/middleware.html]

## RESOURCES

- [https://expressjs.com/en/4x/api.html#app]
  Reading-list:
- [https://jilles.me/getting-the-express-app-js/]
- [https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4] Express 4.0
- [https://jilles.me/express-routing-the-beginners-guide/]
- [https://jilles.me/getting-the-express-app-js/]
- [https://expressjs.com/en/guide/routing.html]
  Documentation Express router documentation [https://expressjs.com/en/4x/api.html#router]

## Server quick starter guide and template

1. Set up your backend with dev dependencies and server dependencies
   [npm install --save-dev nodemon babel-cli babel-preset-env babel-preset-stage-0] && [npm install node express request-promise cors dotenv -S]

2. Set up the presets for babel `.babelrc` [touch .babelrc]

```
{
  "presets": ["env", "stage-0"]
}
```

3. Go to package.json file and add scripts file

```
"start": "nodemon server.js --exec babel-node -e js"\
```

A starter template for the Express server is on `serverTemplate.js`

4. Test the route on the frontend going to localport:portnumber

If app crashes with error - already listening to on the port requested run a pkill node short for (process kill node) as control c only clears the terminal without killing the instance of node.

More debugging on stackoverflow [https://stackoverflow.com/questions/4075287/node-express-eaddrinuse-address-already-in-use-kill-server]
