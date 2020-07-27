const greet = require("./exportModuleExample");
console.log(greet, "LOGS IMPORTED FILE");
const {
  increaseCount,
  decreaseCount,
  showCount,
} = require("./exportModuleExample");

increaseCount();
decreaseCount();
decreaseCount();
console.log("LOGS IMPORTED FUNCTION ANSWER:", showCount());
