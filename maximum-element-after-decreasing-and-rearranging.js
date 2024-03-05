/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function (arr) {
  arr.sort((a, b) => a - b);
  let ans = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= ans + 1) {
      ans++;
    }
  }
  return ans;
};

let arr = [2, 2, 1, 2, 1];

console.log(maximumElementAfterDecrementingAndRearranging(arr));
