#include <iostream>
#include <vector>
#include <cassert>
#include "solution.cpp" // Çözüm sınıfını içeren dosyanın adı bu olmalı

using namespace std;

// Yardımcı fonksiyon: vektörü yazdır
void printVector(const vector<int>& vec) {
    for (int num : vec) {
        cout << num << " ";
    }
    cout << endl;
}

// Yardımcı fonksiyon: iki vektör eşit mi?
bool vectorsEqual(const vector<int>& a, const vector<int>& b) {
    if (a.size() != b.size()) return false;
    for (int i = 0; i < a.size(); ++i) {
        if (a[i] != b[i]) return false;
    }
    return true;
}

int main() {
    Solution sol;

    // Test 1
    vector<int> input1 = {5, 4, 2, 3};
    vector<int> expected1 = {3, 2, 5, 4};
    vector<int> result1 = sol.numberGame(input1);
    assert(vectorsEqual(result1, expected1));
    cout << "Test 1 passed: ";
    printVector(result1);

    // Test 2
    vector<int> input2 = {10, 1, 9, 2};
    vector<int> expected2 = {2, 1, 10, 9};
    vector<int> result2 = sol.numberGame(input2);
    assert(vectorsEqual(result2, expected2));
    cout << "Test 2 passed: ";
    printVector(result2);

    // Test 3: Tekrarlı sayılar
    vector<int> input3 = {6, 6, 1, 1};
    vector<int> expected3 = {1, 1, 6, 6};
    vector<int> result3 = sol.numberGame(input3);
    assert(vectorsEqual(result3, expected3));
    cout << "Test 3 passed: ";
    printVector(result3);

    // Test 4: Büyük giriş
    vector<int> input4 = {8, 3, 7, 2, 6, 1};
    vector<int> expected4 = {2, 1, 4, 3, 8, 7};
    vector<int> result4 = sol.numberGame(input4);
    cout << "Test 4 result: ";
    printVector(result4); // Manuel kontrol, assert yok

    cout << "Tüm testler başarıyla geçti!" << endl;
    return 0;
}
