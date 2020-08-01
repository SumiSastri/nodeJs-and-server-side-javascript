const fs = require("fs");

const writeStream = fs.createWriteStream(
  "./test-directory/testFile.txt",
  "UTF-8"
);
const readStream = fs.createReadStream(
  "./test-directory/sampleText.md",
  "UTF-8"
);

readStream.on("data", (data) => {
  writeStream.write(data);
});

// process.stdin.pipe(writeStream);
readStream.pipe(writeStream);
