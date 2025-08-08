# Problem 009

**Difficulty:** `Easy`
**Source:** LeetCode

---

## Problem Statement

> Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.

---

## My Approach

> I used closure to maintain current value of init. And I created fakeInit variable to store the initial value for reset. 