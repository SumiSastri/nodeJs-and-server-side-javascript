const fs = require("fs");

setTimeout(() => {
  fs.unlinkSync("./test-directory/delete-directory/colors.md");
}, 4000);
