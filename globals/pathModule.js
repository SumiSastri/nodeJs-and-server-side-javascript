// using the require method
const path = require("path");

// using the basename method
console.log(path.basename(__filename), "logs module name");
console.log(`Using backticks - the file name is ${path.basename(__filename)}`);
