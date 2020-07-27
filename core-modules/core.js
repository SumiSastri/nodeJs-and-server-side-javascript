const path = require("path");

// Other than __dirname takes params as strings, from globals folder, within that timers folder - create path from core.js to point to this file path, __dirname points to the current folder path - ie core.js

const dirUploads = path.join(
  __dirname,
  "globals",
  "processObjectAndMethods",
  "timers"
);

console.log(dirUploads, "PATH LOGGED");
// OUTPUT: /Users/ssbt/Documents/GitHub/node.js-and-server-side-javascript/core-modules/globals/processObjectAndMethods/timers
