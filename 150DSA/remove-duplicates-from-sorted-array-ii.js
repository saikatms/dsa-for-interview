/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length - 2 && nums[i] === nums[i + 2]) {
      continue;
    } else {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};

let nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums));
