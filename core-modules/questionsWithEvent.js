const showAnswers = require("./answersWithEvent");

// consumer is the one where the logs show
const questions = [
  "What is the way to Timbuktoo? ",
  "Do you have a map to get there? ",
  "That maptatimeimnbto is good? ",
];

const answerEvents = showAnswers(questions);

answerEvents.on("answer", (answer) =>
  console.log(`question answered: ${answer}`)
);

answerEvents.on("complete", (answers) => {
  console.log("Thank you for your answers. ");
  console.log(answers);
});

answerEvents.on("complete", () => process.exit());
