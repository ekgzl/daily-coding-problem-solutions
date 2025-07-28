#include <iostream>
#include <vector>
#include <cstdlib>
#include <string>
#include "solution.cpp"

// Custom assert function
void myAssert(bool condition, const std::string& message = "Assertion failed") {
    if (!condition) {
        std::cerr << "ERROR: " << message << std::endl;
        std::exit(1);
    }
}

void run_tests()
{
    // Test 1identifier "assert" is undefinedC/C++(20)
    std::vector<int> input1 = {1, 2, 3, 4, 5};
    std::vector<int> expected1 = {120, 60, 40, 30, 24};
    myAssert(productArray(input1) == expected1, "Test 1 failed");

    // Test 2
    std::vector<int> input2 = {3, 2, 1};
    std::vector<int> expected2 = {2, 3, 6};
    myAssert(productArray(input2) == expected2, "Test 2 failed");

    // Test 3: Tek elemanlı dizi
    std::vector<int> input3 = {10};
    std::vector<int> expected3 = {1};
    myAssert(productArray(input3) == expected3, "Test 3 failed");

    // Test 4: Boş dizi
    std::vector<int> input4 = {};
    std::vector<int> expected4 = {};
    myAssert(productArray(input4) == expected4, "Test 4 failed");

    // Test 5: Sıfır içeren dizi
    std::vector<int> input5 = {0, 4, 5};
    std::vector<int> expected5 = {20, 0, 0};
    myAssert(productArray(input5) == expected5, "Test 5 failed");

    std::cout << "All tests passed successfully!" << std::endl;
}

int main()
{
    run_tests();
    return 0;
}