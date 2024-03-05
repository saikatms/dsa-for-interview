/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let res = 0;
  while (n > 0) {
    res = res + parseInt(n / 5);
    n = parseInt(n / 5);
    console.log(n);
  }
  return res;
};
let n = 128;

console.log(trailingZeroes(n));
