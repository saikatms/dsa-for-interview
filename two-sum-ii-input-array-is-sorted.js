/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let map = {};
  for (let i = 0; i < numbers.length; i++) {
    const targetReq = target - numbers[i];
    if (map.hasOwnProperty(targetReq)) {
      return [map[targetReq], i + 1];
    }

    map[numbers[i]] = i + 1;
  }
};

let numbers = [2, 7, 11, 15],
  target = 9;
console.log(twoSum(numbers, target));
