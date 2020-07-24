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

## RESOURCES

- [https://expressjs.com/en/4x/api.html#app]
  Reading-list:
- [https://jilles.me/getting-the-express-app-js/]
- [https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4] Express 4.0
- [https://jilles.me/express-routing-the-beginners-guide/]
- [https://jilles.me/getting-the-express-app-js/]
- [https://expressjs.com/en/guide/routing.html]
  Documentation Express router documentation [https://expressjs.com/en/4x/api.html#router]
