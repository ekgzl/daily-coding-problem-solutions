# Problem 006

**Difficulty:** `Easy`
**Source:** LeetCode

---

## Problem Statement

> Given two integers, num and t. A number x is achievable if it can become equal to num after applying the following operation at most t times:

Increase or decrease x by 1, and simultaneously increase or decrease num by 1.
Return the maximum possible value of x.

---

## My Approach

> It is clearly seen that the max val of x is double val of t plus num. The reason is that we can increase x by t and num by t, or decrease both