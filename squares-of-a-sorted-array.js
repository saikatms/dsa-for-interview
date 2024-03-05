/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function (nums) {
//   let n = nums.length,
//     left = 0,
//     right = n - 1,
//     result = new Array(n);
//   for (let index = n - 1; index >= 0; index--) {
//     if (Math.abs(nums[left]) > Math.abs(nums[right])) {
//       result[index] = nums[left] ** 2;
//       left++;
//     } else {
//       result[index] = nums[right] ** 2;
//       right--;
//     }
//   }
//   return result;
// };

var sortedSquares = function (nums) {
  let n = nums.length;
  let index;
  for (index = 0; index < n; index++) {
    if (nums[index] >= 0) {
      break;
    }
  }

  let i = index - 1,
    j = index,
    ind = 0,
    temp = new Array(n);
  while (i >= 0 && j < n) {
    if (nums[i] < nums[j]) {
      temp[ind] = nums[j] ** 2;
      j--;
    } else {
      temp[ind] = nums[i] ** 2;
    }
    ind++;
  }
  while (i >= 0) {
    temp[ind++] = arr[i] * arr[i];
    i--;
  }
  while (j < n) {
    temp[ind++] = arr[j] * arr[j];
    j++;
  }

  // copy 'temp' array into original array
  for (let x = 0; x < n; x++) arr[x] = temp[x];
  console.log(temp);
};
let nums = [-4, -1, 0, 3, 10];

console.log(sortedSquares(nums));
