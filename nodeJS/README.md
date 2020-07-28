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
