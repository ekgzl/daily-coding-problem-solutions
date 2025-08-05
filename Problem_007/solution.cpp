#include <string>
#include <sstream>
#include <vector>
#include <iostream>
#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    bool checkIfPangram(string sentence) {
        int array[127] = {0};
        for(char c : sentence){
            array[c]++;
        }
        for(int i = 97; i <= 122;i++){
            if(array[i] < 1){
                return false;
            }
        }
        return true;

    }
};