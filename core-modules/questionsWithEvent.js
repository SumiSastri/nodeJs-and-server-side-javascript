const showAnswers = require("./answersWithEvent");

// consumer is the one where the logs show
const questions = [
  "What is the way to Timbuktoo? ",
  "Do you have a map to get there? ",
  "That maptatimeimnbto is good? ",
];

const answerEvents = showAnswers(questions);
// log answer to console
answerEvents.on("answer", (answer) =>
  console.log(`question answered: ${answer}`)
);
// event adds it to console to display it - additional handler with event
answerEvents.on("complete", (answers) => {
  console.log("Thank you for your answers. ");
  console.log(answers);
});
// repeats all the events answers and completes on exit
answerEvents.on("complete", () => process.exit());
