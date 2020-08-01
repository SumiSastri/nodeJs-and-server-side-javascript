const cp = require("child_process");

const spawnQuestions = cp.spawn("node", ["spawnQuestions.js"]);

spawnQuestions.stdin.write("Gatwick North \n");
spawnQuestions.stdin.write("10 Bell Lane \n");
spawnQuestions.stdin.write("Limo \n");

spawnQuestions.stdout.on("data", (data) => {
  console.log(`from the question app: ${data}`);
});

spawnQuestions.on("close", () => {
  console.log(`spawnQuestions process exited`);
});
