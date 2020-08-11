# What is express.js?

Express is a lightweight back-end server for local-testing/ deployment of apps.

It is used with the Node module system and follows the CommonJS syntax. It also has it's own syntax and HTTP utility methods and middleware to make creating API REST routes quick and easy.

To use the ExpressJS framework, it needs to be installed into a project with npm or nvm. The folder intantiated with node and then the package installed.

Express.js forms part of the middle-ware between the backend server and the front-end ui-ux.

Just as React is a library that manages browser-based data in state/ ui-ux changes and DOM manipulation, Express is a frame-work that manages requests from the servers' databases to the front-end.

Express comes with it's own syntax and methods. It is a protocol and has a more rigid structure but is lightweight and very quick to set up.

## Express Command Line Interface(CLI)

The Express Application Generator is a CLI. `npm install express generator -g` for the project
`sudo npm install express generator` if you have system admin rights

`express -h` gives you all the options for the CLI.

## Setting an Express Server

`npm init - y`

Once you have node you have a package-JSON file you can now install express.

1. Set up the server with dev dependencies and server dependencies
   [npm install --save-dev nodemon babel-cli babel-preset-env babel-preset-stage-0] && [npm install node express cors dotenv -S]

2. Set up the presets for babel `.babelrc` [touch .babelrc]

```
{
  "presets": ["env", "stage-0"]
}
```

3. Go to package.json file and add scripts file, you are not calling your server index.js,
   make sure your main file is set to the name that you have given your express server - `server.js` example and set up your start-scripts `"start": "nodemon server.js --exec babel-node -e js"\`

4. A starter template for the Express server is on `serverTemplate.js`

5. Test the route on the frontend going to localport:portnumber

If router crashes with error - already listening to on the port requested run a pkill node short for (process kill node) as control c only clears the terminal without killing the instance of node.

More debugging on stackoverflow [https://stackoverflow.com/questions/4075287/node-express-eaddrinuse-address-already-in-use-kill-server]

Note:

1. A vanilla server can be quickly spun-up using the easy to follow documentation to get started. This is useful if you are using create-react-router as your compiler and not babel.

Documentation getting started: [https://expressjs.com/en/starter/hello-world.html]

Using the require method from Common JS, the library is imported and used.

## The App object and its methods

Documentation of all the methods available: [https://expressjs.com/en/4x/api.html#router]

A local-host port is assigned the `router.get()` method is set up with a request and response to test the port is displaying the information.

```
const express = require("express");
const router = express();
const port = 3000;

router.get("/", (req, res) => res.send("Hello World!"));

router.listen(port, () =>
  console.log(`Example router listening at http://localhost:${port}`)
);
```

The `router.listen()` method allows you to check if the port is listening and accepting changes. It binds and listens for connections on the specified host and port. The method returns a HTTP server object.

The `router.use()` method takes the static files you are going to use to connect the back-end and front-end.

`router.use(express.static(__dirname));`

Documentation[https://expressjs.com/en/4x/api.html#router.listen]

Instead of writing code in nodes in the document, express methods help route responses and requests to and from the servers' databases to the front-end.

This backend routing of the data happens through API calls and routing of URLs that are not visible to the end-user.

In this router we are using hard-coded data from www.mockaroo.com

If you are using data from mongoDB you will need to add another dependency. [npm install request-promise mongoose dotenv]

Express server can directly call these routes with these methods.

`router.get()` - gets resources from an external API (url) or a dB on a request
`router.post()` - post data (the resource) from the local host URL (by sending a request) to a database
`router.put()` - updating the data (resource) on the local host URL with the data (resource, payload) of the data from the database
`router.delete()` - deletes data either on the FE or dB

## REST routes with Express

Routes on the back end are the request for data from a database (or filepath) and the returing of this data in the response.

To set up REST API calls and routes associated with those calls, the express function and the router method need to be imported into a module.

```
const express = require('express');
const router = express.Router();
```

The Express Router also has its own methods but to run routes - to separate concerns, these methods are usually moved out of the `server.js` file into a controllers or backend-routes folder and imported back into the server.

`router.get()` - gets resources from a URL end-point in the request body
`router.post()` - gets resources from a URL end-point and updates it in the response sent
`router.put()` - gets resources from a URL end-point based on an uniqueID and updates a particular resource in the response sent
`router.delete()` - gets resources from a URL end-point based on a unique ID and permanantly deletes a particular resource in the response sent

**Routing params**
The params of the req. method to find a specific id. In a route you may want to find a specific resource, you will need to specify that in the route path with a slash, colon as the first arg and then run the request response args. If you use the `(req.params.id)` method, you will the data of the id of the resource required. The method is in the demo file `routingWithIds.js`

**Routing handlers**
A route handler is the block of code that is held in the router method.

**Routing chaining**
All routes - get, post, put and delete can be chained as one block of code.

## Request and response methods

See demo in `vanillaRouting.js` in the get route.

The request methods that are frequently used are `req.body` or the body of the data, `req.cookies()` for cookie drops, `req.params()` are some of the commonly used methods - Documentation [https://expressjs.com/en/4x/api.html#req]

Response methods, some useful methods are `res.send()` to send the response back, `res.download()` to download resources, `res.redirect()` to redirect resources - Documentation [https://expressjs.com/en/4x/api.html#res]

## Midware

`router.use()` is the method to consume all midware

- json parses incoming requests with JSON payloads. Documentation[https://expressjs.com/en/4x/api.html#express.json]
- the `express.static()` method serves static assets such as HTML files, images. Documentation [https://expressjs.com/en/4x/api.html#express.static] See the demo file `staticFilesTemplate.js`
- url encloded parses incoming requests with URL-encoded payloads Documentation[https://expressjs.com/en/4x/api.html#express.urlencoded]
- error methods are built into Express, they do not need to be explicitly declared or called [https://expressjs.com/en/guide/error-handling.html]
- the way that the midware is stacked is important - the error midware needs to be last
- error midware to custom handle errors is best used just above `router.listen()` if there is no explicit handler, express uses its own handler
- third-party midware like cors, favicon, etc., can be added documentation for each shows you how to import the third party library and use it with the methods available [https://expressjs.com/en/guide/using-middleware.html#middleware.third-party] as well as a cheatsheet[https://expressjs.com/en/resources/middleware.html]

## Debugging

In terminal run the command `DEBUG=express:* node server.js` (or name of your server, eg. index.js - whatever you have called the express server file ).

If you want to run the debug automatically with nodemon, you need to go to your package json file and add it there in the scripts section as a debug script.

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js --exec babel-node -e js"
    "debug": "DEBUG=express:* nodemon server.js --exec babel-node -e js"
  },
```

or if your start script is with node commands then copy the start scripts after the debug values in the json debug prop.

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "node ./server-side/server.js",
"debug": "DEBUG=express:\* node ./server-side/server.js"
},

## Proxy servers

Documentation [https://expressjs.com/en/guide/behind-proxies.html]

Proxy is another server that pushes endpoint calls or traffic to your application. There are multiple use cases for proxies. However there are security issues to consider and should not be used without considering these security issues.

Some of the methods I have used are by installing the run-all package [npm install run-all]

- Unless I want to deploy the app - at which stage the package JSOn files and an [npm-run-build] are required I do not set up a proxy server or static files, I merely install dependencies.

Just before deploy I will run build and modify the servers to add a proxy server in package JSOn and express.

```
[npm run build]
Modify scripts

    "scripts": {
    "start": "npm-run-all -s build start-backend",
    "start-frontend": "react-scripts start",
    "start-backend": "nodemon src/back-end/server.js",
    "start-dev": "npm-run-all -p start-frontend start-backend",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"

},

Add proxy just above es lint and below scripts

"proxy": "http://localhost:3001",
"eslintConfig": {
"extends": "react-app"
},
```

## Security and servers (see security folder for detailed breakdown)

- keep dependencies up-to-date and secure
- use official list promoted by the Express team
- for sensitive data use TLS, which is the next progression of SSL. You can get a free TLS certificate through services like Let's Encrypt and, depending on where you host your services, they will have documentation on how to install your certificate.
- use the library Helmet, it adds a collection of middleware that secures further HTTP headers.
- use cookies securely
- review node security documentation

## RESOURCES

- [https://expressjs.com/en/4x/api.html#router]
  Reading-list:
- [https://jilles.me/getting-the-express-router-js/]
- [https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4] Express 4.0
- [https://jilles.me/express-routing-the-beginners-guide/]
- [https://jilles.me/getting-the-express-router-js/]
- [https://expressjs.com/en/guide/routing.html]
  Documentation Express router documentation [https://expressjs.com/en/4x/api.html#router]

In the demo-section the readme documentation has the Express official readme documentation that is available in the Express node module.
