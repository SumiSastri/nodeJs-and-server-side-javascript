const delay = 10000;
const waitInterval = 1000;
let currentTime = 0;
console.log(`Timer delay set at ${delay / 1000} seconds`);

const incDelay = () => {
  currentTime += waitInterval;
  //   clears up decimal places
  const countDownTimer = Math.floor((currentTime / delay) * 100);
  // cleans up the way the information is presented on the terminam
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Count down at ... ${countDownTimer}%`);
};
console.log(`delay increased by ${waitInterval / 1000} seconds`);

const stopTimer = () => {
  clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log(
    `Timer updated every ${waitInterval / 1000}sec & stops in ${
      delay / 1000
    } secs`
  );
};

const interval = setInterval(incDelay, waitInterval);
setTimeout(stopTimer, delay);
