# Problem 002

**Difficulty:** `Hard`
**Source:** Daily Coding Problem

---

## Problem Statement

> Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i. For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

---

## My Approach

My solution use two **for loops**. My idea is go through all elements in the array and check `i` and `j` to skip the index. Then I have a vector array to hold the multiplied results.  
