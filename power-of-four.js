/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if ((n = 0)) {
    return false;
  }
  let value = Math.log2(n) / 2;
  if (Math.floor(value).toString() != value) {
    return false;
  } else {
    return true;
  }
};
console.log(isPowerOfFour(5));
