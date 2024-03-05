/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0,
    total = 0,
    res = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    while (total >= target) {
      res = Math.min(i - left + 1, res);
      total -= nums[left];
      left++;
    }
  }

  return res == Number.MAX_SAFE_INTEGER ? 0 : res;
};
let target = 213,
  nums = [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12];

console.log(minSubArrayLen(target, nums));
