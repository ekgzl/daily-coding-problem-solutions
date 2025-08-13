const compose = require("./solution");

// Test cases for compose function
function runTests() {
  // Test 1: Basic composition (x => x + 1, x => 2 * x)
  const fn1 = compose([(x) => x + 1, (x) => 2 * x]);
  console.assert(
    fn1(4) === 9,
    "Test 1 Failed: compose([x => x + 1, x => 2 * x])(4) should equal 9"
  );

  // Test 2: Empty functions array
  const fn2 = compose([]);
  console.assert(
    fn2(5) === 5,
    "Test 2 Failed: Empty composition should return the input value"
  );

  // Test 3: Single function
  const fn3 = compose([(x) => x * 3]);
  console.assert(
    fn3(2) === 6,
    "Test 3 Failed: Single function composition should work correctly"
  );

  // Test 4: Three functions composition
  const fn4 = compose([(x) => x + 10, (x) => x * 2, (x) => x - 1]);
  console.assert(
    fn4(5) === 18, // (5 - 1) * 2 + 10 = 4 * 2 + 10 = 8 + 10 = 18
    "Test 4 Failed: Three functions composition should work correctly"
  );

  // Test 5: String operations
  const fn5 = compose([
    (s) => s.toUpperCase(),
    (s) => s + "!",
    (s) => "Hello " + s,
  ]);
  console.assert(
    fn5("world") === "HELLO WORLD!",
    "Test 5 Failed: String operations composition should work correctly"
  );

  console.log("All tests passed!");
}

// Run the tests
runTests();
