const createCounter = require('./solution.js').createCounter;

// Helper function for test reporting
function runTest(testName, testFn) {
  try {
    testFn();
    console.log(`✅ PASSED: ${testName}`);
  } catch (error) {
    console.log(`❌ FAILED: ${testName}`);
    console.log(`   Error: ${error.message}`);
  }
}

console.log("=== createCounter Test Suite ===");

// Test 1: Basic increment
runTest("Increment from 0", () => {
  const counter = createCounter(0);
  if (counter.increment() !== 1) throw new Error("Increment failed");
  if (counter.increment() !== 2) throw new Error("Increment failed");
});

// Test 2: Basic decrement
runTest("Decrement from 2", () => {
  const counter = createCounter(2);
  if (counter.decrement() !== 1) throw new Error("Decrement failed");
  if (counter.decrement() !== 0) throw new Error("Decrement failed");
});

// Test 3: Reset functionality
runTest("Reset after increment/decrement", () => {
  const counter = createCounter(5);
  counter.increment(); // 6
  counter.decrement(); // 5
  counter.decrement(); // 4
  if (counter.reset() !== 5) throw new Error("Reset failed");
  if (counter.increment() !== 6) throw new Error("Increment after reset failed");
});

// Test 4: Multiple resets
runTest("Multiple resets", () => {
  const counter = createCounter(10);
  counter.increment(); // 11
  counter.reset();     // 10
  counter.decrement(); // 9
  if (counter.reset() !== 10) throw new Error("Multiple reset failed");
});

// Test 5: Negative initial value
runTest("Negative initial value", () => {
  const counter = createCounter(-3);
  if (counter.increment() !== -2) throw new Error("Increment failed");
  if (counter.decrement() !== -3) throw new Error("Decrement failed");
  if (counter.reset() !== -3) throw new Error("Reset failed");
});

// Test 6: Zero initial value
runTest("Zero initial value", () => {
  const counter = createCounter(0);
  if (counter.decrement() !== -1) throw new Error("Decrement failed");
  if (counter.reset() !== 0) throw new Error("Reset failed");
});