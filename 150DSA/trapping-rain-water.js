/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let water = 0,
    lheight = new Array(height.length),
    rheight = new Array(height.length);
  lheight[0] = height[0];
  rheight[height.length - 1] = height[height.length - 1];

  // lheight[0] = height[0];

  for (let i = 1; i < height.length; i++) {
    lheight[i] = Math.max(height[i], lheight[i - 1]);
  }
  for (let i = height.length - 2; i >= 0; i--) {
    rheight[i] = Math.max(height[i], rheight[i + 1]);
  }
  for (let i = 1; i < height.length - 1; i++) {
    water = water + Math.min(lheight[i], rheight[i]) - height[i];
  }
  return water;
};
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(trap(height));
