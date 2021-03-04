const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null) return "Unable to determine the time of year!";

  if (isNaN(Date.parse(date))) throw new Error();

  if (date.getMonth !== Date.prototype.getMonth) {
    throw new Error();
  }

  let month = date.getMonth();

  if (month > 1 && month < 5) return "spring";
  if (month > 4 && month < 8) return "summer";
  if (month > 7 && month < 11) return "autumn";

  return "winter";
};
