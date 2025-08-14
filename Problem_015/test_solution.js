const addTwoPromises = require('./solution');

// Test cases for addTwoPromises function
async function runTests() {
    try {
        // Test 1: Basic addition
        const result1 = await addTwoPromises(Promise.resolve(2), Promise.resolve(3));
        console.assert(result1 === 5, 'Test 1 Failed: 2 + 3 should equal 5');

        // Test 2: Zero values
        const result2 = await addTwoPromises(Promise.resolve(0), Promise.resolve(0));
        console.assert(result2 === 0, 'Test 2 Failed: 0 + 0 should equal 0');

        // Test 3: Negative numbers
        const result3 = await addTwoPromises(Promise.resolve(-5), Promise.resolve(3));
        console.assert(result3 === -2, 'Test 3 Failed: -5 + 3 should equal -2');

        // Test 4: Decimal numbers
        const result4 = await addTwoPromises(Promise.resolve(1.5), Promise.resolve(2.5));
        console.assert(result4 === 4, 'Test 4 Failed: 1.5 + 2.5 should equal 4');

        // Test 5: Large numbers
        const result5 = await addTwoPromises(Promise.resolve(1000), Promise.resolve(2000));
        console.assert(result5 === 3000, 'Test 5 Failed: 1000 + 2000 should equal 3000');

        // Test 6: Delayed promises
        const delayedPromise1 = new Promise(resolve => setTimeout(() => resolve(10), 100));
        const delayedPromise2 = new Promise(resolve => setTimeout(() => resolve(20), 50));
        const result6 = await addTwoPromises(delayedPromise1, delayedPromise2);
        console.assert(result6 === 30, 'Test 6 Failed: Delayed promises should work correctly');

        console.log('All tests passed!');
    } catch (error) {
        console.error('Test failed with error:', error);
    }
}

// Run the tests
runTests();