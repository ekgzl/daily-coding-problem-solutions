const once = require('./solution');

// Test cases
function runTests() {
    // Test 1: Basic functionality
    let fn1 = (a, b, c) => a + b + c;
    let onceFn1 = once(fn1);
    
    console.assert(
        onceFn1(1, 2, 3) === 6,
        'Test 1a Failed: First call should return 6'
    );
    
    console.assert(
        onceFn1(2, 3, 6) === undefined,
        'Test 1b Failed: Second call should return undefined'
    );

    // Test 2: Single parameter function
    let fn2 = (x) => x * 2;
    let onceFn2 = once(fn2);
    
    console.assert(
        onceFn2(5) === 10,
        'Test 2a Failed: First call should return 10'
    );
    
    console.assert(
        onceFn2(10) === undefined,
        'Test 2b Failed: Second call should return undefined'
    );

    // Test 3: No parameters function
    let fn3 = () => 'hello';
    let onceFn3 = once(fn3);
    
    console.assert(
        onceFn3() === 'hello',
        'Test 3a Failed: First call should return "hello"'
    );
    
    console.assert(
        onceFn3() === undefined,
        'Test 3b Failed: Second call should return undefined'
    );

    console.log('All tests passed!');
}

runTests();