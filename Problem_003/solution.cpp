#include <string>
#include <sstream>
#include <queue>
#include <iostream>

struct Node {
    // node değeri
    std::string val;
    // sol ve sağ çocuk düğümleri
    Node* left;
    Node* right;
    
    Node(const std::string& v, Node* l = nullptr, Node* r = nullptr)
        : val(v), left(l), right(r) {}
};

std::string serialize(Node* root);
Node* deserialize(const std::string& data);
Node* deserializeHelper(const std::string& data, size_t& pos);

std::string serialize(Node* root) {
   if (!root) {
       return "#,";
   }
    std::string temp = root->val + ",";
    temp += serialize(root->left)  + serialize(root->right);
    return temp;
}

Node* deserialize(const std::string& data){

    size_t pos = 0;
    
    return deserializeHelper(data, pos);
    }

    
    
Node* deserializeHelper(const std::string& data, size_t& pos){
if(pos >= data.size())
 return nullptr;

size_t comma;

// virgülün pozisyonunu bul
comma = data.find(',',pos);


// postan virgüle kadar stringi çıkart
std::string token = data.substr(pos,comma-pos);

// pozisyonu sonraki kelimenin başın ayarla
pos = comma+1;

if(token == "#") return nullptr;
Node* node = new Node(token);
node->left = deserializeHelper(data,pos);
node->right = deserializeHelper(data,pos);
return node;
}