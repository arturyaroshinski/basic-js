const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let moveCount = Math.pow(2, disksNumber) - 1;
  let sec = turnsSpeed / 3600;
  let res = moveCount / sec;

  return { turns: moveCount, seconds: Math.trunc(res) };
};
