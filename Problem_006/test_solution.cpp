#include <iostream>
#include "solution.cpp"

using namespace std;

void runTest(const string& testName, int num, int t, int expected) {
    Solution sol;
    int result = sol.theMaximumAchievableX(num, t);
    cout << "Test: " << testName << " | Input: (" << num << ", " << t << ")"
         << " | Expected: " << expected << " | Got: " << result;
    if (result == expected) {
        cout << " ✅ PASSED" << endl;
    } else {
        cout << " ❌ FAILED" << endl;
    }
}

int main() {
    cout << "=== theMaximumAchievableX Test Suite ===" << endl;

    runTest("Basic test 1", 5, 3, 11);
    runTest("Basic test 2", 0, 0, 0);
    runTest("Negative num", -2, 4, 6);
    runTest("Zero t", 7, 0, 7);
    runTest("Large values", 1000, 500, 2000);

    cout << "All tests finished." << endl;
    return 0;
}