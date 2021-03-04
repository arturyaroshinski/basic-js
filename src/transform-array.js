const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  let myArr = [...arr];

  for (let i = 0; i < myArr.length; i++) {
    switch (myArr[i]) {
      case "--discard-next":
        if (i + 1 == myArr.length) {
          break;
        } else {
          myArr.splice(i + 1, 1);
        }

        break;
      case "--discard-prev":
        if (i == 0) {
          break;
        } else {
          myArr.splice(i - 1, 1);
        }

        break;
      case "--double-next":
        if (arr[i + 1] != myArr.length) {
          myArr[i] = myArr[i + 1];
        }

        break;
      case "--double-prev":
        if (myArr[i] != 0) {
          myArr[i] = myArr[i - 1];
        }

        break;
      default:
    }
  }

  let result = [];

  myArr.forEach((val) => {
    if (
      typeof val !== "undefined" &&
      val !== "--discard-next" &&
      val !== "--discard-prev" &&
      val !== "--double-next" &&
      val !== "--double-prev"
    )
      result.push(val);
  });

  return result;
};
