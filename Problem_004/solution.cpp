#include <string>
#include <sstream>
#include <vector>
#include <iostream>

class Solution {
public:
    int firstUniqChar(std::string s) {
std::vector<int> arrayy(256, 0);
    
        for(char c : s){
            arrayy[c]++;
        }
    for(char c : s){
        if(arrayy[int(c)] == 1){
            return s.find_first_of(c);
        }

    }
    return -1;
        }
};