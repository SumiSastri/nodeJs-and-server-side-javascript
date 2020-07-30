const fs = require("fs");

// synchronous
console.log("started reading files");
const files = fs.readdirSync("./");
console.log("finished reading files");
console.log(files);

// async
console.log("started async reading");
fs.readdir("../core-modules", (err, files) => {
  if (err) {
    throw err;
  }
  console.log("completed async reading");
  console.log(files);
});
