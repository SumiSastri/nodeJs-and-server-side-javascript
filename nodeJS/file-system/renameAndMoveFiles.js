const fs = require("fs");

fs.rename(
  "./test-directory/rename-directory/colors_rgb.md",
  "./test-directory/delete-directory/colors.md",
  (error) => {
    if (error) {
      throw error;
    }
  }
);
