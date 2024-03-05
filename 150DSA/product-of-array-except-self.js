/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let leftMul = new Array(nums.length);
  let rightMul = new Array(nums.length);
  leftMul[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    leftMul[i] = leftMul[i - 1] * nums[i - 1];
  }

  rightMul[nums.length - 1] = 1;
  for (let i = nums.length - 2; i > -1; i--) {
    rightMul[i] = rightMul[i + 1] * nums[i + 1];
  }

  let res = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    res[i] = rightMul[i] * leftMul[i];
  }
  return res;
};

let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
