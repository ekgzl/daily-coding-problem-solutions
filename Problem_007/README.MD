# Problem 007

**Difficulty:** `Easy`
**Source:** LeetCode

---

## Problem Statement

> A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise

---

## My Approach

> I created an array to hold all ascii values for lowercase letters equals zero, then increase the array value according to index(ascii value). Then check if there is a array value less than one.