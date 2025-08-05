#include <iostream>
#include <string>
#include "solution.cpp"

using namespace std;

void runTest(const string& testName, const string& sentence, bool expected) {
    Solution sol;
    bool result = sol.checkIfPangram(sentence);
    cout << "Test: " << testName << " | Input: \"" << sentence << "\""
         << " | Expected: " << (expected ? "true" : "false") 
         << " | Got: " << (result ? "true" : "false");
    if (result == expected) {
        cout << " ✅ PASSED" << endl;
    } else {
        cout << " ❌ FAILED" << endl;
    }
}

int main() {
    cout << "=== Pangram Check Test Suite ===" << endl;
    cout << "Testing checkIfPangram function" << endl << endl;

    int totalTests = 0;
    int passedTests = 0;

    // Test 1: Classic pangram
    totalTests++;
    runTest("Classic pangram", "the quick brown fox jumps over the lazy dog", true);

    // Test 2: Another pangram
    totalTests++;
    runTest("Another pangram", "pack my box with five dozen liquor jugs", true);

    // Test 3: Missing some letters
    totalTests++;
    runTest("Missing letters", "hello world", false);

    // Test 4: All lowercase alphabet
    totalTests++;
    runTest("All lowercase", "abcdefghijklmnopqrstuvwxyz", true);

    // Test 5: Empty string
    totalTests++;
    runTest("Empty string", "", false);

    // Test 6: Single letter
    totalTests++;
    runTest("Single letter", "a", false);

    // Test 7: Almost pangram (missing z)
    totalTests++;
    runTest("Missing 'z'", "abcdefghijklmnopqrstuvwxy", false);

    // Test 9: Pangram with numbers and symbols
    totalTests++;
    runTest("With numbers", "the quick brown fox jumps over the lazy dog 123!@#", true);

    // Test 10: Repeated letters pangram
    totalTests++;
    runTest("Repeated letters", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", true);


    // Test 12: Long sentence, not pangram
    totalTests++;
    runTest("Long non-pangram", "this is a very long sentence but it does not contain all letters", false);

    cout << endl << "=== Test Summary ===" << endl;
    cout << "Total tests: " << totalTests << endl;
    cout << "All tests completed." << endl;

    return 0;
}