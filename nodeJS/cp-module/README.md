## What is the child process module?

The child process module (cp-module), allows you to execute external processes in your environment with two key methods, spawn and execute.

The `cp.exec()` method is synchronous, it allows you make http requests and execute them from the terminal, a new terminal from the file path you are in, list the files in the directory and comes with 2 error handlers, one in the bash terminal and the other as a normal node terminal error, and we can even run node commands to other files in the directory.

Demos of this method are in the `exec.js` file. To use the methods, we need to instantiate the child process module first and then use the method.

```
const cp = require("child_process");
cp.exec("open https://github.com/SumiSastri?tab=repositories ");
```
