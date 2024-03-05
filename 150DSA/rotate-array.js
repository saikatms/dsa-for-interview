/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
};
let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
console.log(rotate(nums, k));

function reverse(nums, start, end) {
  while (start <= end) {
    temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}
