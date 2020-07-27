const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdnin,
  output: process.stdout,
});

rl.question(
  "How many server-side JavaScript languages are you comfortable coding?",
  (answer) => {
    console.log(`LOGS USER ANSWER: ${answer}`);
  }
);
