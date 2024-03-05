/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0;
  for (let index = 0; index < nums.length; index++) {
    if (index < nums.length - 1 && nums[index] == nums[index + 1]) {
      continue;
    } else {
      nums[count] = nums[index];
      count++;
    }
  }
  return count;
};
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));
