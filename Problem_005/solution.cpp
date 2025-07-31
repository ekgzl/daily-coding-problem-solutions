#include <string>
#include <sstream>
#include <vector>
#include <iostream>
#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    vector<int> numberGame(vector<int>& nums) {
     sort(nums.begin(),nums.end());
     vector<int> newNums;
     for(int i = 0; i < nums.size();i=i+2){
        newNums.push_back(nums[i+1]);
        newNums.push_back(nums[i]);
     }
     return newNums;
    }
};