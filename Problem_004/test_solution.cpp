#include <iostream>
#include <string>
#include <vector>
#include "solution.cpp"

int main() {
    Solution sol;

    std::string test1 = "leetcode";
    std::string test2 = "aabb";
    std::string test3 = "loveleetcode";
    std::string test4 = "";

    std::cout << "Test 1 (\"leetcode\"): " << sol.firstUniqChar(test1) << std::endl; // Beklenen: 0
    std::cout << "Test 2 (\"aabb\"): " << sol.firstUniqChar(test2) << std::endl;     // Beklenen: -1
    std::cout << "Test 3 (\"loveleetcode\"): " << sol.firstUniqChar(test3) << std::endl; // Beklenen: 2
    std::cout << "Test 4 (\"\"): " << sol.firstUniqChar(test4) << std::endl;         // Beklenen: -1

    return 0;
}