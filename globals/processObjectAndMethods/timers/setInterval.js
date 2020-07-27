const delay = 5000;
// clears and restarts after this interval
const waitInterval = 500;
let currentTime = 0;
console.log(`Timer delay set at ${delay / 1000} seconds`);

//function declaration to increase the delay time and setInterval between calls - runs in an infinite loop unless cleared
const incDelay = () => {
  currentTime += waitInterval;
  console.log(`delay increased by ${currentTime / 1000} seconds`);
};
console.log(`Timer delay set at ${delay / 1000} seconds`);

// function declaration - called as first arg of the global method
// needs to be modified so that it can be cleared
const stopTimer = () =>
  console.log("Timer stopped successfully after 5 seconds");

setInterval(incDelay, waitInterval);
setTimeout(stopTimer, delay);
