## Path Module

- the path module is one of the out of the box methods in the core modules of Node. It helps us discover the exact and relative file paths, also connect modules with their file paths as when we set up a server and serve the static directories
- some of the methods of the path object a
  path.require() - used to load modules
  path.join() - used to join directories (see example in `core.js`)

  A full list of the methods are in the documentation [https://nodejs.org/docs/latest-v13.x/api/path.html]

## Utils Module

- utils module
- `util.log()` is a debugging tool that gives us a log date and time stamp (see example in `utils.js`)

## The v8 module

There are several useful methods that expose the v8 module to us in node - a full list in the v8 API documentation [https://nodejs.org/docs/latest-v13.x/api/v8.html]

In the `utils.js` file, we look at one method `util.log(v8.getHeapStatistics())` which shows us the heap's memory usage and memory stats gives us the physical size, available size, the heap size limit

- destructuring - we can destructure the `require` method, this is what we see in modern frameworks where there is a transpiler working in the background

## Readline Module

- readline is another module that can be used
- the methods available are `createInterface()`
- the createInterface() method args are an object with the input and output, it is another way to use the stdInput/ stdOutput methods without using the process object
- the `question()` method interacts with the terminal in the same way that we used the q&a app with the process module.
  Documentation [https://nodejs.org/docs/latest-v13.x/api/readline.html#readline_rl_question_query_callback]

## Exporting modules

The export method allows us to export modules and import them into other modules so that the code base can be shared.

`module.exports = "Hello World";`, to import the module we need to specify the file path and save the export in a variable to reuse it. `const greet = require("./exportModuleExample");`
