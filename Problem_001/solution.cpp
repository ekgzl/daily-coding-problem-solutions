#include <iostream>
#include <vector>

bool hasPairWithSum(const std::vector<int> &array, int k)
{

    for (int i = 0; i < array.size(); i++)
    {
        for (int j = i + 1; j < array.size(); j++)
        {
            if (array[i] + array[j] == k)
            {
                return true;
            }
        }
    }
    return false;
}