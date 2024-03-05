/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  if ((digits.length = 1)) {
    return [1, 0];
  }
};

let digits = [1, 2, 3];
console.log(plusOne(digits));
