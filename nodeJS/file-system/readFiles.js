const fs = require("fs");
const data = require("./data.json");
console.log(data);
console.log(data.name);

fs.readFile("./data.json", "utf-8", (error, data) => {
  console.log(data);
  const parsedData = JSON.parse(data);
  console.log(parsedData.name);
});
