// CONSUMER
const displayAnswers = require("./answers");

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with node js? ",
];

displayAnswers(questions, (answers) => {
  console.log("Thank you for your answers. ");
  console.log(answers);
  process.exit();
});
