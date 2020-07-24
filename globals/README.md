The global object contains all of the objects, values, and methods that we can use in a Node.js file without having to import any functionality.

A full list of global objects and how they can be used [https://nodejs.org/docs/latest-v12.x/api/globals.html]

- The console object is a part of a global object. It is a debugging tool like it's vanilla JavaScript counterpart.

Console as a global object documentation: [https://nodejs.org/docs/latest-v12.x/api/console.html]

## The CommonJS module pattern

Every Node.js file is referred to as a module as it uses CommonJS module pattern of writing blocks of code as module and exporting these file as an object into another file. The files can be exported to any number of files that require the code and makes the codebase extensible.

**Loading modules with the require method**

Using the `require()` method can be used to load external modules. It refers to the modules which require the code in the modules they have imported for functionality. In newer libraries such as React, the `import` key word is used.

We can either load modules that have shipped with our installation of Node, or modules that we install with npm, or other modules that we create, just other Node files in our directory structure.

**Identifying module file names with the basename method**
The path module gives us tools that we can use to help us work with path strings. Modules that are imported must be stored in variables. Methods that we can use are `path.basename()` to extract the file name from the full path name

It contains its own code, and when we want to load other modules we must use the require() function, that is available to us on the global object.

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

**The standard input and standard output methods**
