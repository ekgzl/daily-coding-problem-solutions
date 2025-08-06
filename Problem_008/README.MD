# Problem 008

**Difficulty:** `Easy`
**Source:** LeetCode

---

## Problem Statement

> Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

---

## My Approach

> I created a function which returns an object with two methods. It called object literal notation. The first method checks for strict equality and the second checks for strict inequality. If the conditions are not met, an error is thrown.