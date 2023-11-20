function add(a, b) {
  try {
    if (typeof a == "number" && typeof b == "number") {
      return a + b;
    } else throw "Not a number";
  } catch (e) {
    return e;
  }
}

function testa() {
  let x = add(4, 5);
  return x;
}

module.exports = { add, testa };
