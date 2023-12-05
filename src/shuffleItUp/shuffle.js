/**
 *
 * @param {*} array
 * @returns
 */
const permutation = (array) => {
  const numElementsArray = array.length;

  if (numElementsArray === 0 || numElementsArray === 1) {
    return 1;
  } else {
    return numElementsArray * permutation(array.slice(0, numElementsArray - 1));
  }
};

module.exports = { permutation };
