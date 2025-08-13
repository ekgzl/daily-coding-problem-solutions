const reduce = require("./solution");

// Test cases for reduce function
function runTests() {
  // Test 1: Sum of numbers
  console.assert(
    reduce([1, 2, 3, 4], (acc, val) => acc + val, 0) === 10,
    "Test 1 Failed: Should sum all numbers correctly"
  );

  // Test 2: Product of numbers
  console.assert(
    reduce([2, 3, 4], (acc, val) => acc * val, 1) === 24,
    "Test 2 Failed: Should multiply all numbers correctly"
  );

  // Test 3: Empty array
  console.assert(
    reduce([], (acc, val) => acc + val, 5) === 5,
    "Test 3 Failed: Should return initial value for empty array"
  );

  // Test 4: Single element
  console.assert(
    reduce([7], (acc, val) => acc + val, 3) === 10,
    "Test 4 Failed: Should handle single element correctly"
  );

  // Test 5: String concatenation
  console.assert(
    reduce(["a", "b", "c"], (acc, val) => acc + val, "") === "abc",
    "Test 5 Failed: Should concatenate strings correctly"
  );

  console.log("All tests passed!");
}

// Export the reduce function first
module.exports = reduce;

// Run the tests
runTests();
