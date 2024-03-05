/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length;
  const lis = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
      }
    }
  }

  return Math.max(...lis);
};
let nums = [10, 9, 2, 5, 3, 7, 101, 18];

console.log(lengthOfLIS(nums));
