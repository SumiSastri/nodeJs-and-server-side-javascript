const readline = require("readline");
// import deconstructed eventEmitter method
const { EventEmitter } = require("events");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = (questions, done = (f) => f) => {
  const answers = [];
  const [firstQuestion] = questions;
  // instantiate method
  const emitter = new EventEmitter();
  const questionAnswered = (answer) => {
    //   use emitter.emit method
    emitter.emit("answer", answer);
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      emitter.emit("complete", answers);
      done(answers);
    }
  };
  rl.question(firstQuestion, questionAnswered);
  return emitter;
};
