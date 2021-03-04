const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    !sampleActivity ||
    typeof sampleActivity !== "string" ||
    sampleActivity <= 0 ||
    sampleActivity > 15
  )
    return false;

  let result;
  let fSampleActivity = parseFloat(sampleActivity);
  let z = 0.693 / 5730;
  result = Math.ceil(Math.log(15 / fSampleActivity) / z);

  if (Number.isNaN(result)) return false;

  return result;
};
