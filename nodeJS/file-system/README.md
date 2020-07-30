## File system - fs Module

It is useful as there are two areas where heavy input/output takes place - network and disk access.
Node ships with a the file system module (fs module) that allows interaction with the file system. The fs module can be used to list files in directories, create new files in directories, stream files, watch files, modify file permissions, just about anything you would need to work with files and directories.

**List contents of a directory**

In `readDirectories.js`, to use the fs module, we need to instantiate the module using the require method `const fs = require("fs");`

To read a file we can use the fs.readdirSync() method. To traverse files, if it is in the same directory `./` if not move up directories with `../` using the full-stop to traverse filepaths. Assign the function declaration to a variable.

```
console.log("started reading files");
const files = fs.readdirSync("./");
console.log("finished reading files");
console.log(files);
```

This method blocking which means that JavaScript is going to stop everything it's doing until the files within that directory are read before processing any more lines of code. If you see run node in terminal you will see an array of the files printed but started and finished reading files are both printed first then the files in the directory.

The better method to use is the async function - here we do not assign the method to a variable.
Once the files within the directory are read they will be passed to a callback function that we supply as the second argument. The first variable of this callback function is any errors that have been thrown. And then the second variable of this callback function are the files themselves. When the files are read, this callback function will be invoked. Because this operates asynchronously, lines eight and 10 will actually be executed before the files are read.
NOTE: The output is the same except we are doing this asynchronously.

```
fs.readdir("../core-modules", (err, files) => {
  if (err) {
    throw err;
  }
  console.log("completed async reading");
  console.log(files);
});
```

**Read contents of a single file in a directory**

In `readFiles.js` we follow the same principles, intantiating the fs module, and using both sync and async methods to see the difference in how the file is read. The sync method, will not read the details of the file object, while the async method will.

```
const text = fs.readFileSync("./data.json", "utf-8");
console.log(text, "logs sync file");
console.log(text.name, "logs text.name sync file - output undefined!");
```

To read this file asynchronously we can use the async method without assigning the method to a variable.

```
fs.readFile("./README.md", "utf-8", (error, text) => {
  console.log(text);
});
```

Binary files can also be read - this is the output of the function in the demo.

```
image files in binary
<Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 00 78 00 00 00 47 08 06 00 00 00 cc 48 83 aa 00 00 04 19 69 43 43 50 6b 43 47 43 6f 6c 6f 72 53 ... 7739 more bytes>
```

**Creat a directory**
You can create a single directory with the fs module, require the module and use the method `fs.mkdir()` again there is a sync method for this as well. If you do not have `./` you will get an error, the full-stop is important.

```
fs.mkdir("./test-directory", (error) => {
  if (error) {
    throw error;
  } else {
    console.log("directory created");
  }
});
```

You can only make a single directory, if you re-run the command `node writeADirectory` you will get an error message.

You can therefore run a check to see if the directory exists before you set-up a new `mkdir` call. This is where the sync method comes handy.

```
if (fs.existsSync("test-directory")) {
  console.log("this directory already exists change the directory name");
} else {
  fs.mkdir("./test-directory", (error) => {
    if (error) {
      throw error;
    } else {
      console.log("directory created");
    }
  });
}
```

**Create a single file**
You can write files with the fs module, require the module and use the method `fs.writeFile()` again there is a sync method for this as well.

The content is created and file is added to the directory you are in, but you can also specify the path.

```
const md = ` this is a test file to demo the fs.writeFile() method`;
fs.writeFile("./test", md.trim(), (error) => {
  if (error) {
    throw console.error();
  } else {
    console.log("the md file has been saved");
  }
});
```

The method take the file path as a string in the first argument, the second argument is the file you want to create - you can chain a method to clean up the file. The third argument is a callback function, which will be invoked once the notes md file has been created, and the contents have been written to that file. The function above will only take in an error as an argument because there's no data to pass back to this callback. The file will be created only when you run the `node writeFiles` in terminal. You will find the `test.md` file now in the same file path.

Unlike the creating of directories, if you run the terminal command `node writeFiles` it will overwrite the last version of the file you have written.

**Append files**
