const fs = require("fs");

const writeStream = fs.createWriteStream(
  "./test-directory/testFile.txt",
  "UTF-8"
);
writeStream.write("hello ");
writeStream.write("world\n");

process.stdin.on("data", (data) => {
  writeStream.write(data);
});

process.stdout.write("hello ");
process.stdout.write("world\n");
