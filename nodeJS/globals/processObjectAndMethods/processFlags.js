// function declaration flag that we want to obtain the value for
const getUserAndGreeting = (flag) => {
  // find the index of dash-dash user or find the index of dash-dash greeting and then return the next value.
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  // once we find the flag, we will increment the index one and then return the value.
  return process.argv[indexAfterFlag];
};
// function call assigned to variables
const greeting = getUserAndGreeting("--greeting");
const user = getUserAndGreeting("--user");

// function assignment call
console.log(`${greeting} ${user}`);

// Terminal command node processObject --user "Thomas Cook" --greeting "I need a holiday"
// OUTPUT I need a holiday Thomas Cook
