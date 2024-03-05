/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//   let half = nums.length / 2;
//   let store = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (store[nums[i]]) {
//       store[nums[i]] = store[nums[i]] + 1;
//       if (store[nums[i]] >= half) {
//         return nums[i];
//       }
//     } else {
//       store[nums[i]] = 1;
//     }
//   }
// };
// Moore's Voting Algo
var majorityElement = function (nums) {
  let count = 0,
    cand = 0;
  for (let i = 0; i < nums.length; i++) {
    if ((count = 0)) {
      cand = nums[i];
    }
    if ((cand = nums[i])) {
      count++;
    } else {
      count--;
    }
  }
  return cand;
};
let nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
