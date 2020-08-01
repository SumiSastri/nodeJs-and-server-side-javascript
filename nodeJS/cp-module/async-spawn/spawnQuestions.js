const displayAnswers = require("./spawnAnswers");

const questions = [
  "What terminal are you flying to? ",
  "What is your pick-up address? ",
  "What car would you like - family, small, saloon, exec, limo? ",
];

const answerEvents = displayAnswers(questions);

answerEvents.on("complete", (answers) => {
  console.log("Thank you, your taxi booking has been made. ");
  console.log(answers);
});
answerEvents.on("complete", () => process.exit());
