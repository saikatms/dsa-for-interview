/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const counter = new Map();
  for (const num of nums) {
    counter.set(num, (counter.get(num) || 0) + 1);
  }
  let ans = 0;
  for (const c of counter.values()) {
    if (c === 1) {
      return -1;
    }
    console.log(c, ">>", Math.ceil(c / 3));
    ans += Math.ceil(c / 3);
  }
  return ans;
};

let nums = [2, 1, 1, 1, 1, 1, 2, 2, 3, 3];
console.log(minOperations(nums));
