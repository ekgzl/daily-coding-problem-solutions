#include <iostream>
#include <cassert>
#include <vector>
#include "solution.cpp"

void run_tests()
{
    // Test 1
    assert(hasPairWithSum({10, 15, 3, 7}, 17) == true);

    // Test 2
    assert(hasPairWithSum({10, 15, 3, 7}, 20) == false);

    // Test 3
    assert(hasPairWithSum({}, 10) == false);

    // Test 4
    assert(hasPairWithSum({10}, 10) == false);

    // Test 5
    assert(hasPairWithSum({-5, 10, 2, 8}, 3) == true);

    // Test 6
    assert(hasPairWithSum({0, 10, 5, 2}, 10) == true);

    // Test 7
    assert(hasPairWithSum({5, 2, 3}, 10) == false);
    assert(hasPairWithSum({5, 2, 5}, 10) == true);

    std::cout << "All tests passed successfully!" << std::endl;
}

int main()
{
    run_tests();
    return 0;
}