import readline from "readline";
const rl = readline.createInterfact({
  input: process.stdin,
  output: process.stdout,
});

// export the function and return nothing - so that code does not break on the import
module.exports = (questions, done = f  => f{
const answer =[];
const [firstQuestion] = questions

const questionsAnswered = answer => {
    answers.push(answer);
    if (answers.length <questions.length) {
        rl.question(questions[answers.length], questionAnswered)
    } else {
        done(answers)
    } 
}
rl.question(firstQuestion, questionAnswered)
}
