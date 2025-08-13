# Problem 014

**Difficulty:** `Easy`
**Source:** LeetCode

---

## Problem Statement

> Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.


---

## My Approach

> I use closure to save boolean value for first call of function. In first call I change the closure value and return val of fn. Then return undefined.
