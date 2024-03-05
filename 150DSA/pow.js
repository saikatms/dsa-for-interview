/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  function helper(x, n) {
    if (x == 0) {
      return 0;
    }
    if (n == 0) {
      return 1;
    }
    let res = helper(x * x, parseInt(n / 2));
    return n % 2 !== 0 ? x * res : res;
  }
  let res = helper(x, Math.abs(n));
  return n >= 0 ? res : 1 / res;
};
let x = 2.0,
  n = 10;
console.log(myPow(x, n));
