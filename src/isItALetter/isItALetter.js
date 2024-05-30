/**
 *
 * @param {*} param This can be any character and it will check if its a letter or not
 * @returns true or false
 */
function isItALetter(param) {
  if (typeof param === "string") return true;
  else return false;
}

module.exports = { isItALetter };
