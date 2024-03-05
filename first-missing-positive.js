/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (arr) {
  let flag = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      flag = 1;
      break;
    }
  }

  if (flag == 0) {
    return 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0 || arr[i] > arr.length) {
      arr[i] = 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[(arr[i] - 1) % arr.length] += arr.length;
  }

  for (let i = 0; i < arr.length; i++) if (arr[i] <= arr.length) return i + 1;

  return arr.length + 1;
};

let nums = [3, 4, -1, 1]; //[1, 2, 0];

//[7, 8, 9, 11, 12]; //[(1, 2, 0)];

//[7, 8, 9, 11, 12];
console.log(firstMissingPositive(nums));
