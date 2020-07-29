const fs = require("fs");

const data = {
  name: "Balbir",
};

fs.writeFile("data.json", JSON.stringify(data), (error) => {
  console.log("executed writeFile", error);
});

// does not write the file as it is expecting a string
const userData = {
  name: "Bhupender",
};

fs.writeFile("userData.json", userData, (error) => {
  console.log("executed writeFile without stringify method", error);
});
