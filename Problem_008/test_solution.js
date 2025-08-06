const expect = require('./solution').expect;

/**
 * Helper function to run tests and catch errors
 * @param {string} testName - Name of the test
 * @param {Function} testFn - Test function to run
 */
function runTest(testName, testFn) {
  try {
    testFn();
    console.log(`✅ PASSED: ${testName}`);
    return true;
  } catch (error) {
    console.log(`❌ FAILED: ${testName}`);
    console.log(`   Error: ${error.message}`);
    return false;
  }
}

// Test suite
console.log("=== expect() Function Test Suite ===");

let passedTests = 0;
let totalTests = 0;

// Test 1: Basic toBe with equal values
totalTests++;
if (runTest("toBe with equal values", () => {
  const result = expect(5).toBe(5);
  if (result !== true) throw new Error("Should return true");
})) passedTests++;

// Test 2: Basic toBe with different values
totalTests++;
if (runTest("toBe with different values", () => {
  try {
    expect(5).toBe(6);
    throw new Error("Should have thrown an error but didn't");
  } catch (e) {
    if (e.message !== "Not Equal") throw new Error(`Wrong error message: ${e.message}`);
  }
})) passedTests++;

// Test 3: Basic notToBe with different values
totalTests++;
if (runTest("notToBe with different values", () => {
  const result = expect(5).notToBe(6);
  if (result !== true) throw new Error("Should return true");
})) passedTests++;

// Test 4: Basic notToBe with equal values
totalTests++;
if (runTest("notToBe with equal values", () => {
  try {
    expect(5).notToBe(5);
    throw new Error("Should have thrown an error but didn't");
  } catch (e) {
    if (e.message !== "Equal") throw new Error(`Wrong error message: ${e.message}`);
  }
})) passedTests++;

// Test 5: toBe with objects (should fail because objects are compared by reference)
totalTests++;
if (runTest("toBe with objects", () => {
  try {
    expect({a: 1}).toBe({a: 1});
    throw new Error("Should have thrown an error but didn't");
  } catch (e) {
    if (e.message !== "Not Equal") throw new Error(`Wrong error message: ${e.message}`);
  }
})) passedTests++;

// Test 6: toBe with same object reference (should pass)
totalTests++;
if (runTest("toBe with same object reference", () => {
  const obj = {a: 1};
  const result = expect(obj).toBe(obj);
  if (result !== true) throw new Error("Should return true");
})) passedTests++;

// Test 7: notToBe with null values
totalTests++;
if (runTest("notToBe with null values", () => {
  const result = expect(null).notToBe(undefined);
  if (result !== true) throw new Error("Should return true");
})) passedTests++;

// Test 8: toBe with special values (NaN)
totalTests++;
if (runTest("toBe with NaN", () => {
  try {
    expect(NaN).toBe(NaN);
    throw new Error("Should have thrown an error but didn't");
  } catch (e) {
    if (e.message !== "Not Equal") throw new Error(`Wrong error message: ${e.message}`);
  }
})) passedTests++;

// Test 9: String values
totalTests++;
if (runTest("toBe with strings", () => {
  const result = expect("hello").toBe("hello");
  if (result !== true) throw new Error("Should return true");
})) passedTests++;

// Test 10: Boolean values
totalTests++;
if (runTest("notToBe with booleans", () => {
  const result = expect(true).notToBe(false);
  if (result !== true) throw new Error("Should return true");
})) passedTests++;

// Summary
console.log("\n=== Test Summary ===");
console.log(`Passed: ${passedTests}/${totalTests} tests`);
if (passedTests === totalTests) {
  console.log("✅ All tests passed!");
} else {
  console.log(`❌ ${totalTests - passedTests} tests failed.`);
}