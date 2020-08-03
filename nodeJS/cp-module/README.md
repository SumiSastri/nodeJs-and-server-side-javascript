## What is the child process module?

The child process module (cp-module), allows you to execute external processes in your environment with two key methods, spawn and execute.

The `cp.exec()` method is synchronous, it allows you make http requests and execute them from the terminal, a new terminal from the file path you are in, list the files in the directory and comes with 2 error handlers, one in the bash terminal and the other as a normal node terminal error, and we can even run node commands to other files in the directory.

Demos of this method are in the `exec.js` file. To use the methods, we need to instantiate the child process module first and then use the method.

```
const cp = require("child_process");
cp.exec("open https://github.com/SumiSastri?tab=repositories ");
```

- To run async processes, we need to use the spawn method. It shortens the run time for long running processes or processes that are waiting for input or anything that remains open. To use the process the demo is in `spawn.js` we need to require the cp-module and instantiate the `cp.spawn()` method. We can then run the node module, like we did the exec method, from the file to run the questions in the `spawnQuestions` file.

```
const cp = require("child_process");
const spawnQuestions = cp.spawn("node", ["spawnQuestions.js"]);

```

Once the questions have been spawned into an array of questions (the second arg expects and array)We now communicate with this process through standard input and standard output. This means that when spawnQuestions outputs any data, we can handle it with this callback function. Logging the information note that the process remains open for all three answers. So we provide the answers

```
spawnQuestions.stdin.write("Gatwick North \n");
spawnQuestions.stdin.write("10 Bell Lane \n");
spawnQuestions.stdin.write("Limo \n");

spawnQuestions.stdout.on("data", (data) => {
  console.log(`from the question app: ${data}`);
});
});

```

We can also exit the process by listenening for when the question app closes.

```
spawnQuestions.on("close", () => {
  console.log(`spawnQuestions process exited`);
});
```

When you run the application it runs all at once because we're answering all three questions at once and exits when all the questions are answered.
