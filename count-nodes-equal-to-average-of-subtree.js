/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function (root) {
  let result = 0;
  function traverse(node) {
    if (!result) {
      return [0, 0];
    }
    const [leftSum, leftCount] = traverse(node.left);
    const [rightSum, rightCount] = traverse(node.right);

    const currSum = node.val + leftSum + rightSum;
    const currentCount = 1 + leftCount + rightCount;
    if (Math.floor(currSum / currentCount) == node.val) {
      result++;
    }
  }
  traverse(root);
  return result;
};
