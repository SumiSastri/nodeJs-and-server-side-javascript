// REFACTORING SET INTERVAL
const delay = 5000;
const waitInterval = 1000;
let currentTime = 0;
console.log(`Timer delay set at ${delay / 1000} seconds`);

const incDelay = () => {
  currentTime += waitInterval;
  console.log(`delay increased by ${currentTime / 1000} seconds`);
};

// modify the stopTimer function to accept the interval set
// clear the interval with the clearInterval method that takes the arg of interval that is set in the setInterval method
const stopTimer = () => {
  clearInterval(interval);
  console.log("Timer updated every second & stops in 5 secs");
};

// assign the setInterval method to a variable
const interval = setInterval(incDelay, waitInterval);
setTimeout(stopTimer, delay);
