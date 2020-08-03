const fs = require("fs");

fs.renameSync(
  "./test-directory/rename-directory/colors.md",
  "./test-directory/rename-directory/colors_rgb.md"
);
