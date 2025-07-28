# Problem 003

**Difficulty:** `Medium`
**Source:** Daily Coding Problem

---

## Problem Statement

> Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

`class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right`

The following test should pass:

`node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'`



---

## My Approach

My solution uses a `pos` variable that tracks the current position in the serialized string. 
By passing `pos` through reference to the recursive function, all recursive calls share 
the same position tracker. The `#` symbol marks null nodes, allowing the algorithm to 
skip empty children and correctly continue parsing the right subtree after finishing 
the left subtree.