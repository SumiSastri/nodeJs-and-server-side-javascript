# Scaffolding with babel

- `npm init -y` - for package.json
- `npm install babel-cli, babel-preset.env, babel.preset.stage0, express, mongoose, nodemon body-parser` for
- set up file`.babelrc` set up presets `{"presets": [ "env", "stage-0"]}` use stage-0 and above
- set up start scripts with nodemon and babel (file path to the server should be what you call your server, in the start file you just need the file name not the whole file path)

```
{
  "name": "js-app",
  "version": "1.0.0",
  "description": "",
  "main": "filepath/server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js --exec babel-node -e js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

- projects using Node.js need a package.json file which is a manifest of the project including all the packages and applications it depends on. It holds the information about the version/ licence of package(software) dependencies and meta-data - project name, description and author. It also holds the project entry-point for build and deploy and the git respository.

- installing modules is another aspect of node.js - express.js is a module for midware, modules can be installed globally or locally - to the current project and directory.

- vanilla JS depends on the window as the global object, Node has a global object which is different from the window object. The window gives us global access to `console.log(), alert(), setTimeOut()` The Node global object gives us access to methods such as `module.exports` because module is a global object, `module.createRequire(filename)` and `module.createRequireFromPath(filename)` are its methods that we use.

- the global object has the error method that indicates that a module has not been found - while the global object accesses .js & .json files as well as files from a relative file path (./) with the require method, the error methods if they do not find the files in run/ compile time will throw error messages

- module wrapping - before a module's code is executed, Node.js will wrap it with a function wrapper

```
(function(exports, require, module, __filename, __dirname) {
// Module code actually lives in here
});
```

As this is what it does we can create an object and export it and import it to use in our app

- projects using Node.js need a package.json file which is a manifest of the project including all the packages and applications it depends on. It holds the information about the version/ licence of package(software) dependencies and meta-data - project name, description and author. It also holds the project entry-point for build and deploy and the git respository.

- installing modules is another aspect of node.js - express.js is a module for midware, modules can be installed globally or locally - to the current project and directory.

- vanilla JS depends on the window as the global object, Node has a global object which is different from the window object. The window gives us global access to `console.log(), alert(), setTimeOut()` The Node global object gives us access to methods such as `module.exports` because module is a global object, `module.createRequire(filename)` and `module.createRequireFromPath(filename)` are its methods that we use.

- the global object has the error method that indicates that a module has not been found - while the global object accesses .js & .json files as well as files from a relative file path (./) with the require method, the error methods if they do not find the files in run/ compile time will throw error messages

- module wrapping - before a module's code is executed, Node.js will wrap it with a function wrapper

```
(function(exports, require, module, __filename, __dirname) {
// Module code actually lives in here
});
```

As this is what it does we can create an object and export it and import it to use in our main project which is a chatApp using the MERN stack

```
class YourAppUser {
  constructor(userName, firstName, lastName, email, phoneNumber) {
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = 0;
  }

module.exports = YourAppUser;
```

The way you would import it is

```
const YourAppUser = require('./yourAppUserData');

const user1 = new YourAppUser('SpaceInvader', 'Raj', 'Singh', 'raj@email.com', 0797979797);

```

#### What is the front-end?

The front end (client side) is based on three key languages - HTML (hyper-text-markup-language), CSS (Cascading Style Sheets) and JavaScript. JavaScript is a browser-based language that needs its host - HTML to operate its code blocks(algorithms).

#### What is the backend?

Today front-end browsers are in many client devices - phone, tablet, computer screen, wrist watch. It mainly refers to the user interface with a web/mobile application.

Backend refers to the data, logic that the user does not see. This data is stored on non-client side devices - the cloud, physical servers and other remote devices that are not linked to front-end client-side devices (phones, tablets, computers, wristwatches, etc.)

In the front end data that have limited security risks are stored - cookies/ authentication codes, etc. User data - personal details of users, IP-protected code-bases, etc., are stored securely in non-client devices like servers or local storage in the backend. When there is data that needs to be stored securely and when there are CPU-heavy data (videos, image-manipulation, etc.) is better stored on the backend.

#### How do the front-end and back-end communicate? Client-Server API communication

HTTP (hyper-text-transfer-protocol) is the protocol, standards or rules that connect the front-end(client-side) to the back-end (server-side). HTTPS (hyper-text-transfer-protocol-secure) - encrypts the client-service request-response for enhanced security. This is done via an encryptation layer using SSL (secure sockets layer) or TLS (Transport Layer Security)

HTTP & HTTPS enable documents to be transported to and from browsers and back-end databases. It is the basis of data-exchange on the web. The browser (client) sends a request to the server (where documents are hosted) and the server sends a response. The request-response pattern (which is based on a set of rules, standards or protocols) is the language of communicaton between client (browser, front-end) and server (back-end, databases).

The backend (server side) depends on API's to run HTTP requests from databases that are written in a plurality of languages (PHP, Scala, Go-Lang, Python). Client requests are with three key languages - HTML,CSS and JavaScript. For these languages to be understood by the front-end (client-side).

The process of converting the data in javascript from a backend database in a language that is not javascript is done through JSON - javascript object notation.

#### What is JSON?

JSON is a lightweight store of data into text so that HTTP calls can be made, parsed (interpreted) by browsers and sent back to databases. As it is a text-based format it is lightweight. It is then reconverted back into the format that the database requires. It therefore stores and transports data quickly and efficiently. Compared to XML parsing, JSON is less verbose. JSON uses less data overall so reduces cost and increases parsing speed.

The way that JavaScript is converted into JSON is to intatiate a JavaScript object to a variable. This object is then assigned to the method `JSON.parse()`. The method, parses the JavaScript object and convert this JavaScript Object (front-end, client-side language) into Java Script Obect Notation(JSON). The converted object to JSON is sent server-side: Note the syntax to convert a JS object into JSON-

`const objectName = JSON.parse ('{"name":Kodflix", "description":"some description"})'`

The backend now gets a JSON request. JSON is read and the response method used in the back-end code should convert the body of the response first into text then into JSON response with the `JSON.stringify()` method. The backend data is converted into text and intatiated to a variable that is the new response payload (data) which is text that needs to be converted back into JSON. JSON is then

`const convertToJSON = JSON.stringify({name: 'Kodflix', id: 1})`

Note the JSON vs JavaScript object syntax. JavaScript the name value pair, only if the value is a string is it in quotes, however with JSON both the name and value are in strings. JSON objects both the name and value pair are enclosed in quotes, to denote both are strings.

However, there are also similarties - curly-braces hold the values of an object, square-braces hold the values of arrays.

To visualise JSON better - add the Chrome Extension JSONView

Edureka has a good video worth watching[https://www.youtube.com/watch?v=uw_rP5bV9r0] for a more detailed understanding.

#### What is the JavaScript event-loop?

Node and express provide an event-driven architecture for apps and projects. An event is a series of occurences driven by changes on the frontend. Events build up in the task queue and are executed by parsers (both in the front-end and back-end).

As javascript is a single-threaded non-blocking code base, it is able to deal with multiple tasks on the task queue driven by events.

For more detail on the event-loop, MDN documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop]

#### What is Ajax and async JavaScript?

Ajax was created by google to allow you to make a get request (client-side) which is sent to back-end servers. The server sends back a response but instead of loading everything at the same time, a code block is run on load, and assigns only those elements that need to be re-rendered) without reloading the page whole page while data (or the payload) is sent in the background. It is a combination of tools and is mainly accessed via the global `fetch`method in browsers.

React does not have its own in-built AJAX library.

Most server-side code is parsed synchronously - which means each thread executes one function before going on to the next. JavaScript uses a single thread asynchronously to handle several front end requests at the same time.

These requests are sent as an event queue to the server side. JavaScript methods such as call back functions, promises, etc, allows the front-end call stack (requests in an event-queue) to handle all these requests and return in the response from the server side back to the client the elements that can be rendered quickly first while others that need more time to send the data later.

Async javascript is used extensively in connecting the backend to front-end user interfaces and forms and important part in joining up the stack. It is specifically used for single-page-applications.

Some other async methods are `setState({]})` event handlers `onClick.()` and `setTimeOUt.()` are some other examples.

For more on async javascript, callbacks, promises and recursion checkout Gray's Kodiri videos [https://www.youtube.com/watch?v=pX74\_\_nD48I][https://www.youtube.com/watch?v=f5xd1jnhkp8] [https://www.youtube.com/watch?v=PlhmNNNyYyogit]

#### ES-6 call-backs vs. Promises

A call back is executed when one function calls another function. Map,filter and reduce are call-back functions. There is a synchronous nested functionality where one code block has to run before the other can be executed and can lead to what was known as "call-back-hell" or "the pyramid-of-doom". It was also dependent on several conditional statements

Promises serve the same purpose as call-backs were created in ES-6 to solve the call-back-hell problem with using the constructor method that takes two params - resolve and reject - the promise gets executed with a series of .then blocks that results in the promise ending with three states:-

- Fulfilled
- Rejected
- Pending

Promises take 2 arguments `return new Promise (resolve, reject)` followed by`.then()` blocks

#### ES-8 Async Await

Async await is built on top of promises - it makes promises look like synchronous code. As JavaScript is now used both in the back-end and front-end, it helps server-side and client-side developers understand the code base. There are two key words `async` and `await` it is syntactic sugar over promises.

#### SOAP vs. REST?

SOAP is an acryonym for Simple Object Access Protocol while REST is an acryonynm for Representational State Transfer (REST). Both are Application Protocol Interfaces that enter into the cycle of calling, posting, updating and deleting data during the client-server request-response cyle is also called the CRUD cycle - Create, Read, Update, Delete.

API's call the data from the database, posts this data on the web-page, updates the data that it receives from the front-end, sends it back to the backend and saves it or if it is not needed the data is deleted.

SOAP, initially created by Microsoft, is a more rigid way of accessing databases. SOAP relies on XML calls while REST on JSON. SOAP works better with legacy systems such as the Distributed Component Object Model (DCOM) and Common Object Request Broker Architecture (CORBA).

SOAP is a more rigid system that is intolerant of errors. However, SOAP processes can be automated and can be used with STMP (simple mail transfer protocol) as well as HTTP, which means data can be transfered not just to the web but via electronic mail systems.

REST is light-weight becuase of JSON and JavaScript developers prefer REST to SOAP as a significant amount of code needs ot be written to transform XML data.

In the CRUD cycle, REST has only four easy to memorise methods that describe everything that the API call does - get, post, put and delete.

The methods represent the current state of the object - that is where the name Representational State Transfer (REST) gets it's name and in what state (or payload/data) it is in during transit from client to server.

It is therefore an architectural style for communicating between client-server. It is a state-less model as the payloads are merely a representation of state at calltime.

There is no choice between using SOAP or REST as it is already pre-defined as an architectural service and you have to use the system that the API creator requires.

Some sites, like Amazon, support both.

A good blog to read [https://smartbear.com/blog/test-and-monitor/understanding-soap-and-rest-basics/] and a little more technical version [https://www.soapui.org/learn/api/soap-vs-rest-api.html]

Restful-React - As React defines itself as a front-end library, it allows users to figure out what works best for the app - this provides building blocks and flexiblity it also means that there are no protocols to follow, it does not prescribe how REST API's should be created.

Read More on API's and MVC [https://www.codecademy.com/articles/what-is-rest][https://www.codecademy.com/articles/mvc]

#### What is the MEAN-MERN stack?

A stack is a collection of technologies used to run an app. The MEAN stack and MERN stack are an end-to-end javascript collection of technologies used to build apps using the Mongo database and mongoose.js/ express.js as a runner, angular.js or react.js for the front-end ui-ux and node.js to connect the Mongo database to the front-end libraries.

The MEAN/MERN stack are a network of applications based on javascript that communicate through the network front-end - midware - backend fluidly. It is often a preferred option for start-ups as fewer language specialisations are required in the dev team.

- The advantages of MEAN/ MERN- (Mongo-Express-Angular (or React)-Node) stack with javascript read: [https://www.toptal.com/javascript/guide-to-full-stack-javascript-initjs] The stack has a robust architecture for small apps, and comes inbuilt with Jestfor unit testing, if you are using React. The article suggests using gulp for automated build tasks and brackets for full text coding. Server side componentization often done with Docker can be achieved with express.js or connect.js.

# What is Node & server-side JavaScript?

Node is an opensource, cross-platform, runtime environment for server-side and networking applications.

Node is not a language. It is an opensource, cross-platform runtime environment created by Ryan Dahl in 2009 that uses JavaScript as a language.

Dahl took the code on the browser (Chrome's V8 engine) and repackaged it to make it work server-side. It is cross-platform and works on Chakra and SpiderMonkey engines as well.

While Node it is based on JavaScript, it is not a language, it adopts JavaScript's non-blocking, single-threaded asynchronous features in the execution of the event-loop in runtime.
[https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/]

While blocking methods are possible, as Node is cross-platform and language agnostic, non-JS languages like C++ are blocking in nature. The documentation recommends keeping the two methods - synchronous and asynchronous function calls - separate in a code base.
[https://nodejs.org/en/docs/guides/dont-block-the-event-loop/]

Node is a preferred environment for API HTTP requests, file systems, streams, child-processes to render server-side data/payloads/information. It is easy to install and with node package manager(npm) offers access to a plethora of open source packages to add to apps/ projects.

The fluid data flow client-to server, with Node.js, Express.js and associated npm packages, is due to the fact that node is based on JavaScript.

It is therefore good for apps with a high volume of short messages in real-time operations (chat-bots, facial recognition, conferencing, gaming, e-commerce) that need real-time runners between the front end JavacSript code and the backend database. (Trello, googledocs, DropBox use Node.js).

It is more scalable than Rails (Ruby) which can not shuffle around data quickly due to the “thick” application layer - ruby to ruby-on-rails.

Node is largely used to limit the languages that a team uses to JavaScript, hence making teams cross-functional - this is not possible if the backend is run on PHP, Scala, Java and other non-JS languages.

This is why many developers like Node because it's lightweight and you can write your frontend and backend in the same language and share libraries, reduce code write times and tech stack adoption efforts.

The key way to use node is with the CommonJS module pattern and the require function - this method imports a module or file as an object into another file. Data files created in JavaScript can be imported with the require method into express and then used for routing API calls.

Node & Express are not good for CPU heavy applications.

Node Documentation
Home Page -[https://nodejs.org/en/docs/guides/getting-started-guide/]
Guides - [https://nodejs.org/en/docs/guides/]
LTS v.12 - [https://nodejs.org/docs/latest-v12.x/api/index.html]

Good articles to read to understand how and why you would use Node.js as the backend server

Netgurus guide [https://www.netguru.com/blog/use-node-js-backend] a good pdf that can be downloaded is on the website
Why use Node - Medium blog [https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e]

#### What is node.js?

Node is not a language it is an open source runtime environment created by Ryan Dahl in 2009. Dahl took the code on the browser (Chrome's V8 engine) and repackaged it to make it work server-side. It is cross-platform and works on Chakra and SpiderMonkey engines as well.

While node it is based on JavaScript, it is not a language but a cross-platform environment. It also runs different API’s for HTTP requests, file systems, streams, child-processes to render server-side data/payloads/information. It is easy to install and with node package manager(npm) offers access to a plethora of open source packages to add to apps/ projects.

The fluid data flow client-to server, with node, express and associated npm packages, is due to the fact that node is based on JavaScript. It is, like JS, a single-thread, non-blocking system in runtime.

It is therefore good for apps with a high volume of short messages in real-time operations (chat-bots, facial recognition, conferencing, gaming, e-commerce) that need real-time runners between the front end javascript code and the backend database. (Trello, googledocs, DropBox use node.js).

It is more scalable than Rails (Ruby) which can not shuffle around data quickly due to the “thick” application layer - ruby to ruby-on-rails.

Node is largely used to limit the languages that a team uses to JavaScript, hence making teams cross-functional - this is not possible if the backend is run on php, Scala, java and other non-js languages.

The key way to use node is with common.js and the require function - this method imports a module or file as an object into another file. Data files created in javascript can be imported with the require method into express and then used for routing API calls.

Node & Express are not good for CPU heavy applications.

Node Documentation [https://nodejs.org/en/docs/guides/getting-started-guide/]

Good articles to read to understand how and why you would use Node.js as the backend server

- Netgurus guide [https://www.netguru.com/blog/use-node-js-backend] a good pdf that can be downloaded is on the website
- Why use Node - Medium blog [https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e]

#### What is express.js?

Express.js forms part of the middle-ware between the backend server and the front-end ui-ux.

Just as React is a library that manages browser-based data in state/ ui-ux changes and DOM manipulation, Express is a frame-work that manages requests from the servers' databases to the front-end.

Express comes with it's own syntax and methods. It is a protocol and has a more rigid structure but is lightweight and very quick to set up. The basic code for set up to test the server is working is below.

```
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Kodflix App Says Hello World!'));

app.listen(port, () => console.log(`Kodiri-Kodflix app listening on port ${port}!`));
```

Instead of writing code in nodes in the document, express methods help route responses and requests to and from the servers' databases to the front-end.

This backend routing of the data happens through API calls and routing of URLs that are not visible to the end-user.

Documentation [https://expressjs.com/en/4x/api.html#app]
Reading-list:
[https://jilles.me/getting-the-express-app-js/][https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4] Express 4.0
[https://jilles.me/express-routing-the-beginners-guide/] & [https://jilles.me/getting-the-express-app-js/][https://expressjs.com/en/guide/routing.html] Documentation
Express router documentation [https://expressjs.com/en/4x/api.html#router]

#### What is Axios and Superagent?

The two most popular options for making AJAX request with React are Fetch and Axios. As React does not have Ajax to use promises in React you need to install axios [npm install axios]

Axios is like Ajax and you can use ES-6 promises with Axios in React.

SuperAgent does not have promises baked-into the library

#### Backend package managers - Node vs. Yarn

Both are open source registries for software libraries for node.js, yarn is owned by Facebook, npm by npm Inc.

- What do package managers do? They automate the process of installing, updating, configuring, and removing pieces of software packages retrieved from a global registry.

They are different from operating system package managers, such as Brew. Brew also installs, updates, configures and removes software but in a local environment (OS).

- Which one?
- My preference is npm - after using yarn as it is signifcantly faster, updates to yarn cause conflicts in installation. I had a lot of problems and have globally uninstalled yarn

Yarn takes up a lot of disk space, but is faster, manages licences better however, the disc usage space vs efficiency npm considered the better option

- npm is a better package to manage dependencies as sends usage details back to Facebook - yarn official stance is that this is not accurate information
- npm is written all in lower case node package manager installation is sequentially
- yarn uses all of the npm packages it is only a different installation process - using cloudflare, multiple installations happen at the same time

- Conflicts
  If npm-run-all does give you trouble, which it shouldn't, you could consider installing yarn-run-all
  Using both at the same time creates conflicts so use one or the other in the CLI for your project

- Good articles to read to compare the two package managers:-

* Installation and use [https://www.positronx.io/yarn-vs-npm-best-package-manager/]
* Which is better - op-ed[https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/]
* Scotch[https://scotch.io/tutorials/yarn-package-manager-an-improvement-over-npm]
* Keycdn (almost the same as scotch.io) [https://www.keycdn.com/blog/npm-vs-yarn]

#### What is nodemon?

Nodemon hot loads the back end server so you do not need to run commands such as `node src/backend/app.js` (used in this project).
Check in your package-JSON for the install and read documentation [https://github.com/remy/nodemon] which helps bug fixing if you encounter challenges hot-loading.
