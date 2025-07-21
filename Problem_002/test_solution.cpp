#include <iostream>
#include <vector>
#include <cassert>
#include "solution.cpp"

void run_tests()
{
    // Test 1
    std::vector<int> input1 = {1, 2, 3, 4, 5};
    std::vector<int> expected1 = {120, 60, 40, 30, 24};
    assert(productArray(input1) == expected1);

    // Test 2
    std::vector<int> input2 = {3, 2, 1};
    std::vector<int> expected2 = {2, 3, 6};
    assert(productArray(input2) == expected2);

    // Test 3: Tek elemanlı dizi
    std::vector<int> input3 = {10};
    std::vector<int> expected3 = {1};
    assert(productArray(input3) == expected3);

    // Test 4: Boş dizi
    std::vector<int> input4 = {};
    std::vector<int> expected4 = {};
    assert(productArray(input4) == expected4);

    // Test 5: Sıfır içeren dizi
    std::vector<int> input5 = {0, 4, 5};
    std::vector<int> expected5 = {20, 0, 0};
    assert(productArray(input5) == expected5);

    std::cout << "All tests passed successfully!" << std::endl;
}

int main()
{
    run_tests();
    return 0;
}