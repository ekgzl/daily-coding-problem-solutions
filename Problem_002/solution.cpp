#include <iostream>
#include <vector>

std::vector<int> productArray(const std::vector<int> array)
{
    std::vector<int> producted;

    for (int i = 0; i < array.size(); i++)
    {
        int multiply_result = 1;
        for (int j = 0; j < array.size(); j++)
        {
            if (i == j)
                continue;
            multiply_result *= array[j];
        }
        producted.push_back(multiply_result);
    }
    return producted;
}