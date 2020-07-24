The global object contains all of the objects, values, and methods that we can use in a Node.js file without having to import any functionality.

A full list of global objects and how they can be used [https://nodejs.org/docs/latest-v12.x/api/globals.html]

- The console object is a part of a global object. It is a debugging tool like it's vanilla JavaScript counterpart.

Console as a global object documentation: [https://nodejs.org/docs/latest-v12.x/api/console.html]

## The CommonJS module pattern

Every Node.js file is referred to as a module as it uses CommonJS module pattern of writing blocks of code as module and exporting these file as an object into another file. The files can be exported to any number of files that require the code and makes the codebase extensible.

**Loading modules with the require method**

Using the `require()` method can be used to load external modules. It refers to the modules which require the code in the modules they have imported for functionality. In newer libraries such as React, the `import` key word is used.

We can either load modules that have shipped with our installation of Node, or modules that we install with npm, or other modules that we create, just other Node files in our directory structure.

## The path object and its methods

The path object is accessed via a module and gives us tools that we can use to help us work with path strings.

Modules that are imported with the `require()` method must be stored in variables and then the global methods available can be accessed with the dot notation.

`const path = require("path");`

Methods that we can use are `path.basename()` to extract the file name from the full path name.

Path history is an interesting method that is worth reviewing. When invoked it shows the path the module has taken from and to where it is being used.

In React, and other JS libraries, when we are importing we are importing from and exporting to using the path methods to locate directories and files. It is useful to know some of these methods to debug if the path is not correct either in the import or the export.

The path module and methods documentation[https://nodejs.org/docs/latest-v12.x/api/path.html]

## The process object

- The process object contains information about the current process as well as methods to allows us to interact with that process.
  - `process.pid()` returns the process Id
  - `process.versions.node` returns the version of node you are using.

Using these methods we can get environment information, read environment variables, communicate with the terminal and exit the current processes.
Documentation of all methods available [https://nodejs.org/docs/latest-v12.x/api/process.html]

`process.argv` method, in terminal when you run `node processObject` the first command is node, the second arg is processObject, which is the file path, so in the console, we see an array with the full path to where that node process lives in the first element, the second argument is a path to the module that we have asked to be executed.

As this is an array, we can use array destructuring.
If I run the command `node processObject destructure the process.argv array`, each element is comma separated. If I wanted to destructure the array to get `the process.argv array` elements, I can destructure the array

const [, , , article, method, dataType] = process.argv;
console.log(
`In this array I skip the first three elements and I want the words: ${article} ${method} ${dataType}`
);
When I log `node processObject destructure the process.argv array`
the output is the three elements that I have destructured - `the process.argv array`

Documentation for the method [https://nodejs.org/docs/latest-v12.x/api/process.html#process_process_argv]

**Convention of using flags**

- In Node, the convention is to provide flags so that we know what type of variables are being passed.

- In the terminal they are represented by the double dash`--user Jack Robbins`for each variable `--greeting Good Morning`

- In a module we write a factory function to find each of these flags in the array - example in `processFlags.js`

- `process.env()` allows us to store environment variables with passwords securely and allows us to ignore these modules in build mode. Environments help us separate developer dependencies in the code base from the build requirements. Specific documentation for this method [https://nodejs.org/docs/latest-v12.x/api/process.html#process_process_env]

**The standard input and standard output methods**
The standard input and output methods offer a way to communicate with processes while they are running. It helps in live-server requests and responses.

`process.stdout`

- a writeable string
- implements a write method
- the write method sends data out of our program.
- the program runs synchronously and exits once all questions have been exhausted
- See example in `processStandardOutput.js`

`process.stdin` - while `.stdout` is a synchronous function, `.stdin` is an async function that takes a call back.

In the file `processStandardInput.js` is a simple async application in Node.

In our call back function, we are going to chain an event handling method, `emitter.on(eventName, listener)` to the inputs that we are receving from the node process output code block.The event name is a data event. That means that you've typed something into the keyboard and you've pressed enter. In the second argument of the on function is the handler or the function that we will use to handle that data. Data is collected as the first argument that's sent back to this callback function and then we can do something with it.

This application is listening for input data, the application will be open and running, and every time we type in some data, we'll see it in the terminal. We have to explicitly exit the program with the `process.exit` method. We can continue to run the program after the exit with another block of code that will run and since there are no event listeners, the code block runs and exits.

For more on Events documentation:[https://nodejs.org/docs/latest-v12.x/api/events.html]
For the `emitter.on` method documentation[https://nodejs.org/docs/latest-v12.x/api/events.html#events_emitter_on_eventname_listener]

## Async timer methods

Documentation [https://nodejs.org/en/docs/guides/timers-in-node/]

The `setTimeout` method, is a global method (note out is written in lower case!), therefore does not need to be called with the `require` method. `setTimeout()`can be used to schedule code execution after a designated amount of milliseconds. In Node.js it takes two arguments, the first argument is when the timeout should occur (it is a function call when for when timer stops) and the second argument is the number of milliseconds that the timeout is set to (arg is a number).

In that way it is different to the vanilla JavaScript method where the first arg is a string. It also makes the node version more flexible as the function call does not only have to perform an execution of when the timer stops but can take its own args.

**Canceling the setTimeout method**

`setTimeout()` returns a Timeout object that can be used to reference the timeout that was set. This returned object can be used to cancel the timeout.

The methods`clearImmediate(immediate)` or `clearTimeout(timeout)` can be used as well as the `clearInterval(timeout)` with a function call as a param.

`set interval` One way to clear a setTimeout is to set an interval between each timeOut call. Just above the setTimeout a setInterval function that behaves in the same way as a setTimeout can be written. The two args are a function and the next function is the time that the interval should be set at. It is a recursive method that needs the `clearInterval(timeout)` method to stop the function from running in an endless loop.

`clear interval` - we set the `setInterval` method to a variable and pass this as an arg of the `stopTimer()` function, which now takes the `clearInterval` method as one of its args.
