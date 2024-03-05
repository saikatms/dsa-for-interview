/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  let total = 0;
  const dp = new Array(nums.length).fill(null).map(() => ({}));

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      if (diff in dp[j]) {
        dp[i][diff] = (dp[i][diff] || 0) + dp[j][diff] + 1;
      } else {
        dp[i][diff] = (dp[i][diff] || 0) + 1;
      }
      total += dp[j][diff] || 0;
    }
  }

  return total;
};

let nums = [2, 4, 6, 8, 10];
const result = numberOfArithmeticSlices(nums);
console.log("Number of arithmetic subsequences:", result);
