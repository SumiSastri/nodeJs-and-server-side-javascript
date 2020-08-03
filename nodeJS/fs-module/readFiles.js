const fs = require("fs");

const data = require("./test-directory/data.json");
console.log(data, "outputs data file from file path");
console.log(data.name, "outputs data.name from file path");

const text = fs.readFileSync("./test-directory/data.json", "utf-8");
console.log(text, "logs sync file");
console.log(text.name, "logs text.name sync file - output undefined!");

// async - json
fs.readFile("./test-directory/data.json", "utf-8", (error, data) => {
  console.log(data, "ASYNC method");
  const parsedData = JSON.parse(data);
  console.log(parsedData.name, "ASYNC method and picks up data.name");
});
// async - text
// fs.readFile("./README.md", "utf-8", (error, text) => {
//   console.log(text);
// });

// async binary

fs.readFile("./test-directory/example.png", (error, img) => {
  if (error) {
    console.log(`An error has occured ${err.message}`);
    process.exit();
  }
  console.log("image files in binary");
  console.log(img);
});
