/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  // let digitSum = 0;
  // while (num > 0) {
  //   digitSum = digitSum + (num % 10);
  //   num = parseInt(num / 10);
  // }
  // if (digitSum < 10) {
  //   return digitSum;
  // } else {
  //   return addDigits(digitSum);
  // }

  while (num > 9) {
    digitSum = 0;
    while (num > 0) {
      digitSum = digitSum + (num % 10);
      num = parseInt(num / 10);
    }
    num = digitSum;
  }
  return num;
};

let num = 38;
console.log(addDigits(num));
