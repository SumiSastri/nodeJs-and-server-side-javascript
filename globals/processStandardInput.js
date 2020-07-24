const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?",
];

const ask = (i = 0) => {
  process.stdout.write(`\n\ ${questions[i]}`);
  process.stdout.write(` > `);
};

ask();

const answers = [];
// if there is data emitted when event listener is on push that data into a new array called answers
process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  //  check if answers.length is less than questions.length then ask the next question
  // REFACTOR: uncomment to see recursion
  // process.stdin.on("data", (data) => {process.stdout.write(`${data.toString.().trim()}); })
  // at this stage we need to explicityly call the process.exit method to stop code you can continue typing into the terminal ad-infinitum if you do not exit as it is listening for commands to echo back to the terminal
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    // this block then says check if questions and answers arrays length equal - this indicates all questions asked and answered then invoke the exit method
    process.exit();
  }
});
// when the process exits then run this block of code
process.on("exit", () => {
  // deconstruct the array of answers into the elements of the array to use dynamically when passed into the log method
  const [name, activity, lang] = answers;
  console.log(`

  Thank you for your anwsers ${name}. Go ${activity} you can write ${lang} code later!!!
  
    `);
});
