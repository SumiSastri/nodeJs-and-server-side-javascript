const fs = require("fs");

const readStream = fs.createReadStream(
  "./test-directory/sampleText.md",
  "UTF-8"
);

let fileTxt = "";

console.log("type something...");
readStream.on("data", (data) => {
  console.log(`I read ${data.length - 1} characters of text, LOGS DATA READ`);
  fileTxt += data;
});

readStream.once("data", (data) => {
  console.log(data, `LOGS ALL DATA`);
});

readStream.on("end", () => {
  console.log("finished reading file, LOGS END");
  console.log(
    `In total I read ${
      fileTxt.length - 1
    } characters of text, LOGS LENGTH OF DATA READ`
  );
});
