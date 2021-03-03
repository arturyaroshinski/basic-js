const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;

  matrix.forEach((arr) => {
    arr.map((el) => {
      if (typeof el === "string" && el.includes("^^") && el.length === 2) {
        count++;
      }
    });
  });

  return count;
};
