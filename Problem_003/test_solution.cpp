#include <iostream>
#include "solution.cpp"

// Test helper functions
bool treesEqual(Node* a, Node* b) {
    if (!a && !b) return true;
    if (!a || !b) return false;
    return (a->val == b->val) && 
           treesEqual(a->left, b->left) && 
           treesEqual(a->right, b->right);
}

void runTest(const std::string& testName, bool condition) {
    std::cout << "Test: " << testName;
    if (condition) {
        std::cout << " ✅ PASSED" << std::endl;
    } else {
        std::cout << " ❌ FAILED" << std::endl;
    }
}

int main() {
    std::cout << "=== Binary Tree Serialize/Deserialize Test Suite ===" << std::endl;
    std::cout << "Test Date: 2025-07-28 07:55:22 UTC" << std::endl;
    std::cout << "Tester: ekgzl" << std::endl << std::endl;

    int totalTests = 0;
    int passedTests = 0;

    // Test 1: Original Problem Test
    {
        totalTests++;
        Node* node = new Node("root", 
                         new Node("left", new Node("left.left")), 
                         new Node("right"));
        
        Node* deserialized = deserialize(serialize(node));
        
        bool test1 = (deserialized && deserialized->left && 
                     deserialized->left->left && 
                     deserialized->left->left->val == "left.left");
        
        runTest("Original Problem - deserialize(serialize(node)).left.left.val == 'left.left'", test1);
        if (test1) passedTests++;
    }

    // Test 2: Single Node
    {
        totalTests++;
        Node* single = new Node("alone");
        Node* d = deserialize(serialize(single));
        
        bool test2 = (d && d->val == "alone" && !d->left && !d->right);
        runTest("Single Node", test2);
        if (test2) passedTests++;
    }

    // Test 3: Null Tree
    {
        totalTests++;
        Node* nullTree = nullptr;
        Node* d = deserialize(serialize(nullTree));
        
        bool test3 = (d == nullptr);
        runTest("Null Tree", test3);
        if (test3) passedTests++;
    }

    // Test 4: Only Left Branch
    {
        totalTests++;
        Node* leftOnly = new Node("root", 
                             new Node("left", 
                                 new Node("left.left")));
        
        Node* d = deserialize(serialize(leftOnly));
        
        bool test4 = (d && d->val == "root" && 
                     d->left && d->left->val == "left" &&
                     d->left->left && d->left->left->val == "left.left" &&
                     !d->right);
        
        runTest("Only Left Branch", test4);
        if (test4) passedTests++;
    }

    // Test 5: Only Right Branch
    {
        totalTests++;
        Node* rightOnly = new Node("root", nullptr,
                              new Node("right", nullptr,
                                  new Node("right.right", nullptr,
                                      new Node("right.right.right"))));
        
        Node* d = deserialize(serialize(rightOnly));
        
        bool test5 = (d && d->val == "root" && !d->left &&
                     d->right && d->right->val == "right" &&
                     d->right->right && d->right->right->val == "right.right" &&
                     d->right->right->right && d->right->right->right->val == "right.right.right");
        
        runTest("Only Right Branch", test5);
        if (test5) passedTests++;
    }

    // Test 6: Complex Balanced Tree
    {
        totalTests++;
        Node* complex = new Node("A",
                            new Node("B", 
                                new Node("D"), 
                                new Node("E")),
                            new Node("C", 
                                new Node("F"), 
                                new Node("G")));
        
        Node* d = deserialize(serialize(complex));
        
        bool test6 = treesEqual(complex, d);
        runTest("Complex Balanced Tree", test6);
        if (test6) passedTests++;
    }


    // Test 8: Numeric Values as Strings
    {
        totalTests++;
        Node* numeric = new Node("1",
                            new Node("2", new Node("4")),
                            new Node("3", nullptr, new Node("5")));
        
        Node* d = deserialize(serialize(numeric));
        
        bool test8 = treesEqual(numeric, d);
        runTest("Numeric Values as Strings", test8);
        if (test8) passedTests++;
    }

    // Test 9: Empty String Values
    {
        totalTests++;
        Node* empty = new Node("", new Node("left"), new Node(""));
        Node* d = deserialize(serialize(empty));
        
        bool test9 = (d && d->val == "" && 
                     d->left && d->left->val == "left" &&
                     d->right && d->right->val == "");
        
        runTest("Empty String Values", test9);
        if (test9) passedTests++;
    }

    // Test 10: Deep Left Chain
    {
        totalTests++;
        Node* deep = new Node("1", 
                         new Node("2", 
                             new Node("3", 
                                 new Node("4", 
                                     new Node("5")))));
        
        Node* d = deserialize(serialize(deep));
        
        bool test10 = treesEqual(deep, d);
        runTest("Deep Left Chain", test10);
        if (test10) passedTests++;
    }

    // Test Results Summary
    std::cout << std::endl;
    std::cout << "=== Test Results Summary ===" << std::endl;
    std::cout << "Total Tests: " << totalTests << std::endl;
    std::cout << "Passed: " << passedTests << std::endl;
    std::cout << "Failed: " << (totalTests - passedTests) << std::endl;
    std::cout << "Success Rate: " << (100.0 * passedTests / totalTests) << "%" << std::endl;
    
    if (passedTests == totalTests) {
        std::cout << "🎉 ALL TESTS PASSED! Solution is correct." << std::endl;
    } else {
        std::cout << "❌ Some tests failed. Please check your implementation." << std::endl;
    }

    return 0;
}