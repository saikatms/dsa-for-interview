/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let totalJumps = 0,
    coverage = 0,
    lastJumpIdx = 0,
    destination = nums.length - 1;

  if (nums.length == 1) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    coverage = Math.max(coverage, i + nums[i]);

    if (i == lastJumpIdx) {
      lastJumpIdx = coverage;
      totalJumps++;

      if (coverage >= destination) {
        return totalJumps;
      }
    }
  }
  return totalJumps;
};

let nums = [7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3];

console.log(jump(nums));
