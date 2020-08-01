## What is the stream interface?

The stream interface provides us with the technique to read and write data. We can use it to read and write data to files, to communicate with the internet, to communicate with other processes.

In the process module we have already used these methods. The readable stream is `process.stdin()`, data is often read by listening to data events, when we have used `process.stdin.on()` . For writable streams we have used `process.stdout()`. Readable and writable streams go hand-in-hand are used together more often than not.

## Read streams

In the demo file `readStream.js` we can see how the process module differs from the stream-interface in more detail.

```
console.log("type something...");
process.stdin.on("data", (data) => {
  console.log(`I read ${data.length - 1} characters of text`);
});
```

If we go to the terminal and run the file, we will get us the answer 11 characters of text if we type in Hello World as a test. It has given us the "chunk" or "stream" of text we have read.

We can achieve the same result but with better options with the streams interface, which ships with the `readStream()` method. The first argument that this function wants is the path to the file that should be read, for text streams the encoding UTF-8 as the second argument of the create readStream function. The second arg therefore is the type of file extension (text, json, img, etc.)

```
const fs = require("fs");

const readStream = fs.createReadStream(
  "./test-directory/sampleText.md",
  "UTF-8"
);

console.log("type something...");
readStream.on("data", (data) => {
  console.log(`I read ${data.length - 1} characters of text`);
});

```

If you run the file, you can read files bit-by-bit or chunk-by-chunk. Chunking or streaming use less memory because instead of reading everything all at once and loading it into a buffer, you're streaming files based on event handlers `readStream.on()`.

Streams also raise an end event and we can use the end event to know that the readStream has completed.

```
readStream.on("end", () => {
  console.log("finished reading file");
});
```

We can use each chunk or stream separately by assigning the stream or chunk to a variable. To see how this works, the `readStreamChunks.js` is the demo file. With small changes - assigning the text to a variable`let fileTxt = "";` reassigning the value to the data of the text file `fileTxt += data;` and logging it to the end function we can see a summary of what we have read.

## Write streams

In the file ``writeStream.js``` we can see how the process module and the stream interface differ in more detail.

We can with the process module write data to the terminal.

```
process.stdout.write("hello ");
process.stdout.write("world\n");
```

With the stream interface, we need to used the fs module and then instantiate the `fs.create writeStream` method. The first argument is the file path where we want to write the file, and the second arg is the encoding for the file extension.

```
const writeStream = fs.createWriteStream(
  "./test-directory/testFile.txt",
  "UTF-8"
);

```

This creates an empty file with no text in it. We once again can replace the process module methods with the stream-interface method to write text into the empty file we have created with the `writeStream.write()` method. Now the words hello world will appear in the test file in the test directory.

We can combine the process module methods and the stream-interface methods to listen to some data with the process module methods and write the data into the text file we have created with the stream-interface method.`process.stdin.on("data", (data) => { writeStream.write(data); });`

## Combining read and write streams and methods

If we instantiate both the read and write methods in the stream-interface module, we can read from one file, copy what we have read in that file into another file.

```
const fs = require("fs");

const writeStream = fs.createWriteStream(
  "./test-directory/testFile.txt",
  "UTF-8"
);
const readStream = fs.createReadStream(
  "./test-directory/sampleText.txt",
  "UTF-8"
);

readStream.on("data", (data) => {
  writeStream.write(data);
});
```

Readable have several methods that help you compose them to be used with writable streams in conjunction with the process module.

For instance, I can take the process.stdin, which is a readable stream and pipe it to our writeStream and it sends it to the writeStream which will write it to the myFile.txt file. So, let's go ahead and run this. I'll type Hello my name is Alex and then we can go ahead and take a look at myFile.txt within our assets folder and we can see that that data's getting written directly to the file. So, this works with all sorts of streams. If I wanted to take the readStream, which is our lorem ipsum readStream and then pipe it to the writeStream, which is a reference to the myFile.txt, we can do that too. So, I'll come out here to the TERMINAL and run this one last time. Oops, and we notice that we are calling readStream.stdin. We actually, that's the readStream, so we can delete the stdin and try it again. Let me save this file and come back out here. Clear the TERIMINAL and run it. So, nothing happens except we piped from the lorem ipsum mark down document to the writeStream which is my text and we essentially copied the file. The writeable stream is the counterpart to the readable stream. And, just like readable streams, writeable streams are everywhere in node js.
