# Table of Contents

1. [Project goals](#Project-goals)
2. [Folder structure](#Folder-structure)
3. [Project access](#Project-access)

   [RESOURCES](#Resources)

#### Project goals

This project focuses on server-side JavaScript with Node.js. Certificates of completion from Linked-in Learning focusing on levelling-up server-side js.

#### Folder structure

Folders are organised in sections based on following documentation, research from blogs and following some tutorials for specific areas that I found difficult to understand. It serves as a place I can go to for quick reference to code snippets.

1. ![Certificates of courses completed](https://github.com/SumiSastri/node.js-and-server-side-javascript)

- Node essential training (July 2020)
- Node real-time web with Socket.io (Aug 2020)
- Express essential training(Aug 2020)

2. ![Node and databases](https://github.com/SumiSastri/node.js-and-server-side-javascript/tree/master/node-and-dbs)
   work in progress

3. ![Node and databases](https://github.com/SumiSastri/node.js-and-server-side-javascript/tree/master/nodeJS-app)

4.[Node and mongoDB]()
work in progress

5. ![Node fundamental concepts](https://github.com/SumiSastri/node.js-and-server-side-javascript/tree/master/nodeJS)

6. ![Node and Express.js as a server](https://github.com/SumiSastri/node.js-and-server-side-javascript/tree/master/nodeJs-and-express)

7. ![Web Sockets](https://github.com/SumiSastri/node.js-and-server-side-javascript/tree/master/websockets)
   work in progress

8. [Web Sockets App](https://github.com/SumiSastri/node.js-and-server-side-javascript/tree/master/websocketsApp)

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
