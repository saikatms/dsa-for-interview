/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let lastFlag = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= lastFlag) {
      lastFlag = i;
    }
  }
  return lastFlag == 0;
};
let nums = [1, 1, 2, 3, 2, 1, 0, 0, 1, 3];
console.log(canJump(nums));
