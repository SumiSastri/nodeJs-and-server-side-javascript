const fs = require("fs");

fs.readdirSync("./test-directory/delete-directory/delete-2").forEach(
  (fileName) => {
    fs.unlinkSync(`./test-directory/delete-directory/delete-2/${fileName}`);
  }
);

// throws error as directory not empty = Error: ENOTEMPTY: directory not empty,
fs.rmdir("./test-directory/delete-directory/delete-2", (error) => {
  if (error) {
    throw error;
  }

  console.log("SUCCESS: ./test-directory/delete-directory/delete-2 removed");
});
