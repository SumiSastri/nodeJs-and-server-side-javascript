// second arg of the setTimeout method
const delay = 2000;
console.log(`delay set at ${delay / 1000} seconds`);

// function declaration - called as first arg of the global method
const stopTimer = () => console.log("stop timer");

setTimeout(stopTimer, delay);
