const fs = require("fs");

if (fs.existsSync("test-directory")) {
  console.log("this directory already exists change the directory name");
} else {
  fs.mkdir("./test-directory", (error) => {
    if (error) {
      throw error;
    } else {
      console.log("directory created");
    }
  });
}
