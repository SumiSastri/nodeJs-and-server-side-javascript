const showAnswers = require("./answers");

const questions = [
    "What is your name?",
    "What do you enjoy about being a programmer?",
    "What is your preferred programming language?", "
];

showAnswers(questions, answers => {
    console.log("Thanks for your answers");
    console.log(answers, "LOGS ANSWERS");
    process.exit()
})
