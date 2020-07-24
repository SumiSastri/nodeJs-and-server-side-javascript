// second arg of the setTimeout method
const delay = 2000;
console.log(`Timer delay set at ${delay / 1000} seconds`);

// function declaration - called as first arg of the global method
const stopTimer = () =>
  console.log("Timer stopped successfully after 2 seconds");

setTimeout(stopTimer, delay);
