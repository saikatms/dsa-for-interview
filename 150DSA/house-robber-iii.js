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
var rob = function (root) {
  // Returns maximum value from the pair: [includeRoot,
  // excludeRoot]
  const result = heist(root);
  return Math.max(result[0], result[1]);
};

function heist(root) {
  // Empty tree case
  if (root === null) {
    return [0, 0];
  }
  // Recursively calculating the maximum amount that can
  // be robbed from the left subtree of the root
  const leftSubtree = heist(root.left);
  // Recursively calculating the maximum amount that can
  // be robbed from the right subtree of the root
  const rightSubtree = heist(root.right);
  // includeRoot contains the maximum amount of money
  // that can be robbed with the parent node included
  const includeRoot = root.val + leftSubtree[1] + rightSubtree[1];
  // excludeRoot contains the maximum amount of money
  // that can be robbed with the parent node excluded
  const excludeRoot =
    Math.max(leftSubtree[0], leftSubtree[1]) +
    Math.max(rightSubtree[0], rightSubtree[1]);

  return [includeRoot, excludeRoot];
}
