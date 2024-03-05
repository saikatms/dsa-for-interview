/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let numsCount = {};
  for (let index = 0; index < nums.length; index++) {
    if (numsCount[nums[index]]) {
      numsCount[nums[index]] = numsCount[nums[index]] + 1;
      if (nums.length / 2 < numsCount[nums[index]]) {
        return nums[index];
      }
    } else {
      numsCount[nums[index]] = 1;
      if (nums.length / 2 < numsCount[nums[index]]) {
        return nums[index];
      }
    }
  }
};
console.log(majorityElement([1]));
