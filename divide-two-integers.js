/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  count = 0;
  let sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;

  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);
  if (divisor == 1) {
    if (sign == 1) {
      return dividend;
    } else {
      return -dividend;
    }
  }
  while (dividend >= divisor) {
    dividend = dividend - divisor;
    ++count;
  }
  if (sign == 1) {
    return count;
  } else {
    return -count;
  }
};
let dividend = -1,
  divisor = -1;

console.log(divide(dividend, divisor));
