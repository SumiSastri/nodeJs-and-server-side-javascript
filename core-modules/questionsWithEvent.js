// CONSUMER MODULE
const showAnswers = require("./answersWithEvent");

const questions = [
  "What is your name?",
  "What do you enjoy about being a programmer?",
  "What is your preferred programming language?",
];

const answerEvents = showAnswers(questions, (answers) => {
  console.log("Thanks for your answers");
  console.log(answers, "LOGS ANSWERS");
  process.exit();
});

answerEvents.on("answer", (answer) =>
  console.log(`QUESTIONS ANSWERED: ${answer}`)
);
