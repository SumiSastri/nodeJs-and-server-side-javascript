module.exports = "Hello World";

let count = 0;

const increaseCount = () => ++count;
const decreaseCount = () => --count;

const showCount = () => count;

module.exports = {
  increaseCount,
  decreaseCount,
  showCount,
};
