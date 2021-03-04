const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) return false;

  let strMembers = members.filter((val) => typeof val === "string");

  strMembers[0] = strMembers[0].trim().substr(0, 1);
  return strMembers
    .reduce((acc, cur) => (acc += cur.trim().substr(0, 1)))
    .toUpperCase()
    .split("")
    .sort()
    .join("");
};
