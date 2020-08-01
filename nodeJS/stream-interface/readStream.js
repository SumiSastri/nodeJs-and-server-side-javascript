const fs = require("fs");

const readStream = fs.createReadStream(
  "./test-directory/sampleText.md",
  "UTF-8"
);

readStream.once("data", (data) => {
  console.log(data, `LOGS ALL DATA`);
});

console.log("type something...");
readStream.on("data", (data) => {
  console.log(`I read ${data.length - 1} characters of text, LOGS DATA READ`);
});

readStream.on("end", () => {
  console.log("finished reading file, LOGS END");
});

console.log("type something...");
process.stdin.on("data", (data) => {
  console.log(
    `I read ${data.length - 1} characters of text, LOGS process.stdin.on`
  );
});
