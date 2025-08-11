const map = require("./solution");

// Test cases
function runTests() {
  // Test 1: Empty array
  console.assert(
    JSON.stringify(map([], (x) => x * 2)) === JSON.stringify([]),
    "Test 1 Failed: Should return an empty array when input is an empty array"
  );

  // Test 2: Apply function to each element
  console.assert(
    JSON.stringify(map([1, 2, 3], (x) => x * 2)) === JSON.stringify([2, 4, 6]),
    "Test 2 Failed: Should apply the function to each element in the array"
  );

  // Test 3: Pass index to the function
  console.assert(
    JSON.stringify(map([1, 2, 3], (x, i) => x + i)) ===
      JSON.stringify([1, 3, 5]),
    "Test 3 Failed: Should pass the index to the function"
  );

  // Test 4: Handle negative numbers
  console.assert(
    JSON.stringify(map([-1, -2, -3], (x) => x * x)) ===
      JSON.stringify([1, 4, 9]),
    "Test 4 Failed: Should handle negative numbers correctly"
  );

  // Test 5: Handle mix of positive, negative, and zero values
  console.assert(
    JSON.stringify(map([0, -1, 2], (x) => x + 1)) === JSON.stringify([1, 0, 3]),
    "Test 5 Failed: Should handle a mix of positive, negative, and zero values"
  );

  console.log("All tests passed!");
}

// Run the tests
runTests();
