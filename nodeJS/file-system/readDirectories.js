const fs = require("fs");

fs.readdir("c:/", (error, data) => {
  console.log(data, error);
});
