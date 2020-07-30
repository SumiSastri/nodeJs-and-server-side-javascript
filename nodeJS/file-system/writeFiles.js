const fs = require("fs");

const data = {
  name: "Balbir",
};

fs.writeFile("./test-directory/data.json", JSON.stringify(data), (error) => {
  console.log("executed writeFile", error);
});

// does not write the file as the second arg expects a string - you have to stringify as above
const userData = {
  name: "Bhupender",
};

fs.writeFile("./test-directory/userData.json", userData, (error) => {
  console.log("executed writeFile without stringify method", error);
});

const md = ` this is a test file to demo the fs.writeFile() method`;
fs.writeFile("./test-directory/test", md.trim(), (error) => {
  if (error) {
    throw console.error();
  } else {
    console.log("the md file has been saved");
  }
});
