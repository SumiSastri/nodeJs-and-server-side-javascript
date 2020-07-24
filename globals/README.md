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

This application is listening for input data, the application will be open and running, and every time we type in some data, we'll see it in the terminal.

We have to explicitly exit the program with the `process.exit` method.

And we can send the index for the next question from answers.length, so that means that if I've answered one question already, then we will ask the second question in the array. Because answers.length will be one, and that index will point to the second question. Otherwise, we'll have all of the answers, so I'm just going to invoke a process.exit. Let's take a look at what's going to happen here. On line 12 we asked the first question, and when we ask the first question, we don't send any index, so I is equal to zero, which means we ask the first question in the array, what is your name? Now, as soon as I answer that question by typing Alex and pressing enter, this callback function will fire, and we will take that answer, Alex, and push it into the answers array. Now that we have one answer in the array, one is actually less than three, or the length of the questions array, so we're going to use that answers.length, the value of one to ask the next question. Inside of the s function, I becomes one, and we ask the next question. So we will iterate through all of the questions using this little if else block right here. The last thing I want to do is handle the process exit. So whenever the process does exit, I can write up another listener for an exit event. And that listener can be handled with a callback function passed as the second argument. So what I'm going to do in here is write your answers back to you. Now remember, answers is an array, so the first question was what is your name, the second question was what would you rather be doing and the third question is what is your preferred programming language? So the first answer is going to be your name, then the second answer is going to be your activity, what you'd rather be doing. And the third answer is going to be your preferred programming language. So using array de-structuring, I can set some local variables for activity and language. We haven't talked about this much this far, but when we used the template string, we actually honor any white space. So if I added new lines inside of this console log, they would show up. I'll print thank you for your answers. So we'll use them like a mad lib, and I will say go activity, name, you can write lang, code later. So now when the process exits, this handler will fire because we added a process on exit listener there on line 25. So let's go ahead and run our application. I'm going to run out to the terminal and make it a little bigger, and clear it, and we can run node questions, and the first question is what is your name? Alex, what would you rather be doing? Skiing, what is your preferred programming language? Node js, and when we hit enter on that last question the process exit fires, so we print this message that says thank you for your answers, and go skiing Alex, you can write node js code later. Finally notice that the template string that we're using honors light space.

Events and event listeners:-
[https://nodejs.org/docs/latest-v12.x/api/events.html#events_emitter_on_eventname_listener]

[https://nodejs.org/docs/latest-v12.x/api/events.html]
