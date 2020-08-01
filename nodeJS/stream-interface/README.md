## What is the stream interface?

The stream interface provides us with the technique to read and write data. We can use it to read and write data to files, to communicate with the internet, to communicate with other processes.

In the process module we have already used these methods. The readable stream is `process.stdin()`, data is often read by listening to data events, when we have used `process.stdin.on()` .

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
