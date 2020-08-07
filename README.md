# Table of Contents

1. [Project goals](#Project-goals)
2. [Folder structure](#Folder-structure)
3. [Project access](#Project-access)

   [RESOURCES](#Resources)

#### Project goals

This project focuses on server-side JavaScript with Node.js. Certificates of completion from Linked-in Learning focusing on levelling-up server-side js.

1. Node essential traning (July 2020)
2. Node real-time web with Socket.io (Aug 2020)
3. Express essential training(Aug 2020)

**What is the front-end (client-side)?**

The front end (client side) is based on three key languages - HTML (hyper-text-markup-language, CSS (Cascading Style Sheets) and JavaScript. JavaScript is a browser-based language that needs its host - HTML to operate its code blocks(algorithms).

Today front-end browsers are in many client devices - phone, tablet, computer screen, wrist watch. It mainly refers to the user interface with a web/mobile application.

**What is the backend (server-side)?**
Backend refers to the data, logic that the user does not see. This data is stored on non-client side devices - the cloud, physical servers and other remote devices that are not linked to front-end client-side devices (phones, tablets, computers, wristwatches, etc.)

In the front end data that have limited security risks are stored - cookies/ authentication codes, etc. User data - personal details of users, IP-protected code-bases, etc., are stored securely in non-client devices like servers or local storage in the backend. When there is data that needs to be stored securely and when there are CPU-heavy data (videos, image-manipulation, etc.) is better stored on the backend.

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

#### Folder structure

Folders are organised in sections based on following documentation, research from blogs and following some tutorials for specific areas that I found difficult to understand. It serves as a place I can go to for quick reference to code snippets.

1. [Certificates of courses completed]()

2. [Node and databases](https://github.com/SumiSastri/node.js-and-server-side-javascript/tree/master/node-and-dbs)
   work in progress

3. [A NodeJS full-stack app with MongoDb](https://github.com/SumiSastri/node.js-and-server-side-javascript/tree/master/nodeJS-app)
   work in progress

4. [Node fundamental concepts](https://github.com/SumiSastri/node.js-and-server-side-javascript/tree/master/nodeJS)

5. [Node and Express.js as a server](https://github.com/SumiSastri/node.js-and-server-side-javascript/tree/master/nodeJs-and-express)

6. [Web Sockets](https://github.com/SumiSastri/node.js-and-server-side-javascript/tree/master/websockets)
   work in progress
7. [Web Sockets App](https://github.com/SumiSastri/node.js-and-server-side-javascript/tree/master/websocketsApp)

#### Project access

**Install dependencies**

`npm install -y` in each subfolder. Install dependencies outlined in the README.md files in each section.

**Run logs with vanilla JS files**

cd into file path node filename or node filepath/filename

#### RESOURCES

Node Documentation
Home Page -[https://nodejs.org/en/docs/guides/getting-started-guide/]
Guides - [https://nodejs.org/en/docs/guides/]
LTS v.12 - [https://nodejs.org/docs/latest-v12.x/api/index.html]

Good articles to read to understand how and why you would use Node.js as the backend server

Netgurus guide [https://www.netguru.com/blog/use-node-js-backend] a good pdf that can be downloaded is on the website
Why use Node - Medium blog [https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e]

#### What is nodemon?

Nodemon hot loads the back end server so you do not need to run commands such as `node src/backend/app.js`
Check in your package-JSON for the install and read documentation [https://github.com/remy/nodemon] which helps bug fixing if you encounter challenges hot-loading.

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
