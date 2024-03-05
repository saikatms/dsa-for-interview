/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let num = x;
  let rev = 0;
  while (x > 0) {
    let dec = x % 10;
    rev = rev * 10 + dec;
    x = parseInt(x / 10);
  }
  return rev == num ? true : false;
};
let x = 121;
console.log(isPalindrome(x));
