/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function (n) {
  if (n % 2 == 0) {
    return n / 2;
  } else {
    return n;
  }
};

console.log(numberOfCuts(10));
