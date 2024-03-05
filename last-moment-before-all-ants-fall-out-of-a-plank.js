/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
  let leftMax = Math.max(...left);
  let rightMin = Math.min(...right);
  console.log(leftMax);
  return Math.max(leftMax, n - rightMin);
};
let n = 4,
  // left = [4, 3],
  // right = [0, 1];
  left = [0, 1, 2, 3, 4, 5, 6, 7],
  right = [];

console.log(getLastMoment(n, left, right));
