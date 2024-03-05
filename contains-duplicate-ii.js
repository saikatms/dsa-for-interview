/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
//O(n2)
// var containsNearbyDuplicate = function (nums, k) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

var containsNearbyDuplicate = function (nums, k) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] !== undefined && i - obj[nums[i]] <= k) {
      return true;
    }
    obj[nums[i]] = i;
  }
  return false;
};

let nums = [1, 2, 3, 1, 2, 3],
  k = 2;

console.log(containsNearbyDuplicate(nums, k));
