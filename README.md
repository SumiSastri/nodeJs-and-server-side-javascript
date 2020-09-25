# Table of Contents

1. [Project goals](#Project-goals)
2. [Certifications](#Certifications)
3. [Project access](#Project-access)
4. [RESOURCES](#Resources)

#### Project goals

This project focuses on server-side JavaScript with Node.js. Certificates of completion from Linked-in Learning focusing on levelling-up server-side js.

#### Certifications

Folders are organised in sections based on following documentation, research from blogs and following some tutorials for specific areas that I found difficult to understand. It serves as a place I can go to for quick reference to code snippets.

1. [Certificates of courses completed](https://github.com/SumiSastri/node.js-and-server-side-javascript/tree/master/certifications)

- Node essential training (July 2020)
- Node real-time web with Socket.io (Aug 2020)
- Express essential training(Aug 2020)
- NodeJS Security (Aug 2020)
- MERN Essential Training(Aug 2020)

Key folders for code base

- [Node fundamental concepts](https://github.com/SumiSastri/node.js-and-server-side-javascript/tree/master/nodeJS)

- [Node and Express.js as a server](https://github.com/SumiSastri/node.js-and-server-side-javascript/tree/master/nodeJs-and-express)

#### Project access

- [Back to Table of Contents](#Table-of-Contents)]

**Install dependencies**

`npm install -y` in each subfolder. Install dependencies outlined in the README.md files in each section.

**Run logs with vanilla JS files**

cd into file path node filename or node filepath/filename

#### RESOURCES

- [Back to Table of Contents](#Table-of-Contents)]

Node Documentation
Home Page -[https://nodejs.org/en/docs/guides/getting-started-guide/]
Guides - [https://nodejs.org/en/docs/guides/]
LTS v.12 - [https://nodejs.org/docs/latest-v12.x/api/index.html]

Good articles to read to understand how and why you would use Node.js as the backend server

Netgurus guide [https://www.netguru.com/blog/use-node-js-backend] a good pdf that can be downloaded is on the website
Why use Node - Medium blog [https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e]

#### What is nodemon?

Nodemon hot loads the back end server every time you update the code base.

Check in your package-JSON for the install and read documentation [https://github.com/remy/nodemon] which helps bug fixing if you encounter challenges hot-loading.

You need to change the package-json scripts eg: `"start": "nodemon server.js --exec babel-node -e js",` and use npm run start

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

**A note about Node Package Manager vs. Node Version Manager**

Node version manager is a bash script that helps you work with several versions of node depending on the application.

Install instructions:

1. Clone [git clone http://github.com/creationix/nvm.git .nvm] OR `[git clone git://github.com/creationix/nvm.git $nvm_target]
2. Curl [$ curl https://raw.github.com/creationix/nvm/master/install.sh | sh]
3. Find the file [ls -a | grep .nvm]
4. Clean up installation [touch ~/.bash_profile]
5. Re-run curl [curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash]
6. Shut down and restart terminal run [source ~/.nvm/nvm.sh]
7. Check if installed [nvm --version]

Documentation: [https://github.com/nvm-sh/nvm]
Debug: Stackoverflow has excellent suggestions

- [https://stackoverflow.com/questions/16904658/node-version-manager-install-nvm-command-not-found#comment46581365_16905910]
  Read More: Medium articles (useful background but not useful really for set up and debugging
- [https://medium.com/@isaacjoe/best-way-to-install-and-use-nvm-on-mac-e3a3f6bc494d]
- [https://itnext.io/nvm-the-easiest-way-to-switch-node-js-environments-on-your-machine-in-a-flash-17babb7d5f1b]

Blog[https://itnext.io/nvm-the-easiest-way-to-switch-node-js-environments-on-your-machine-in-a-flash-17babb7d5f1b]

Uninstalling Node packages
Documentation [https://docs.npmjs.com/cli/uninstall]

- [Back to Table of Contents](#Table-of-Contents)]
