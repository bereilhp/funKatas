/**
 *
 * @param {*} param The character or Unicode code point to be checked
 * @returns true if the parameter is a letter, false otherwise
 */
function isItALetter(param) {
  const charCode = typeof param === "string" ? param.charCodeAt(0) : param;
  return /[a-zA-Z]/i.test(String.fromCharCode(charCode));
}

module.exports = { isItALetter };
