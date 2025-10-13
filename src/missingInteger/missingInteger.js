function solution(A) {
  const seen = new Set(A);
  console.log(seen)
  let smallest = 1;


  while (seen.has(smallest)) {
    smallest++;
  }

  return smallest;

}

module.exports = solution

