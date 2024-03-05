/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let target = -nums[i];
    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      if (nums[l] + nums[r] < target) {
        l++;
      } else if (nums[l] + nums[r] > target) {
        r--;
      } else {
        let threeSumArr = new Array(3);
        threeSumArr[0] = nums[i];
        threeSumArr[1] = nums[l];
        threeSumArr[2] = nums[r];
        res.push(threeSumArr);

        while (l < r && nums[l] == threeSumArr[1]) {
          l++;
        }

        while (l < r && nums[r] == threeSumArr[2]) {
          r--;
        }
      }
    }
    while (i + 1 < nums.length && nums[i + 1] == nums[i]) {
      i++;
    }
  }
  return res;
};
let nums = [0, 0, 0, 0];

console.log(threeSum(nums));

function threeSum(nums, target) {
  let result = [];
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const complement = target - (nums[i] + nums[j]);
      if (complement in hash) {
        result.push([nums[i], nums[j], complement]);
      } else {
        hash[nums[j]] = true;
      }
    }
  }

  return result;
}

function threeSum(nums, target) {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}
