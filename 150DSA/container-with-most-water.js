/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1,
    maxArea = 0;
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(area, maxArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
