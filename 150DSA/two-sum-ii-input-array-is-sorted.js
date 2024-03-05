/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let l = 0,
    r = numbers.length - 1;
  while (l <= r) {
    if (numbers[l] + numbers[r] > target) {
      r--;
    } else if (numbers[l] + numbers[r] < target) {
      l++;
    } else {
      return [l, r];
    }
  }
};
let numbers = [2, 7, 11, 15],
  target = 9;
console.log(twoSum(numbers, target));
