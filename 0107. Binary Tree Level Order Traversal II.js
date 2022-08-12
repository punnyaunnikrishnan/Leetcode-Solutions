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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  var res = [];
  helper(root, 0, res);
  return res.reverse();
};

var helper = function (root, level, res) {
  if (!root) return;
  if (!res[level]) res[level] = [];
  res[level].push(root.val);
  helper(root.left, level + 1, res);
  helper(root.right, level + 1, res);
};
