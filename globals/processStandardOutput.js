process.stdout.write("Hello ");
process.stdout.write("world \n\n\n");
// regex adds 3 new lines under the command

// array with questions
const questions = [
  "What is your name?",
  "What do you enjoy about being a programmer?",
  "What is your preferred programming language?",
];

// function declaration - index of question to ask in the array
const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  // process.stdout.write(` > `); uncomment to see the difference
  process.stdout.write(`\n\n\n > `);
  // every character must be defined including white spaces with nodefirst argument is the function to invoke when the timer is completed
};
// function call - default is 0 the first question
ask();
ask(1);
ask(2);
