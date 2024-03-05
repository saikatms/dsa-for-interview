/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let rev = 0;

  while (Math.abs(x) > 0) {
    rev = rev * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  return rev >= 2 ** 31 * -1 && rev <= 2 ** 31 ? rev : 0;
};

let x = -15342364;
console.log(reverse(x));
