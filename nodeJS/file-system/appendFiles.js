const fs = require("fs");
const colorData = require("./test-directory/colors.json");

colorData.colorList.forEach((c) => {
  fs.appendFile(
    "./test-directory/colors.md",
    `${c.color}: ${c.hex} \n`,
    (error) => {
      if (error) {
        throw error;
      }
    }
  );
});
