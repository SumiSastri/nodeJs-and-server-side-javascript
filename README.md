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
class ChatAppUser {
  constructor(userName, firstName, lastName, email, phoneNumber) {
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = 0;
  }

module.exports = ChatAppUser;
```

The way you would import it is

```
const ChatAppUser = require('./chatAppUserData');

const user1 = new ChatAppUser('SpaceInvader', 'Raj', 'Singh', 'raj@email.com', 0797979797);

```

The way you would import it is

```
const ChatAppUser = require('./chatAppUserData');

const user1 = new ChatAppUser('SpaceInvader', 'Raj', 'Singh', 'raj@email.com', 0797979797);

```
