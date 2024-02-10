// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:

// Input: root = [1,null,2]
// Output: 2

var maxDepth = function(root) {
    function _maxDepth(root, depth){
        if (!root) return depth
        let dl = _maxDepth(root.left, depth + 1)
        let dr = _maxDepth(root.right, depth + 1)
        return dl > dr ? dl : dr
    }
    return _maxDepth(root,0)
};