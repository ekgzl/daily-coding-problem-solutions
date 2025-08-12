const filter = require("./solution");

// Test 1: Sıfırları filtrele
console.assert(
  JSON.stringify(filter([0, 1, 2, 0, 3], (x) => x)) ===
    JSON.stringify([1, 2, 3]),
  "Test 1 Failed: Sıfırları filtrelemeli"
);

// Test 2: Sadece çift sayıları al
console.assert(
  JSON.stringify(filter([1, 2, 3, 4], (x) => x % 2 === 0)) ===
    JSON.stringify([2, 4]),
  "Test 2 Failed: Sadece çift sayıları almalı"
);

// Test 3: İndex ile filtrele (sadece çift indextekiler)
console.assert(
  JSON.stringify(filter([10, 20, 30, 40], (x, i) => i % 2 === 0)) ===
    JSON.stringify([10, 30]),
  "Test 3 Failed: Sadece çift indextekiler alınmalı"
);

// Test 4: Boş dizi
console.assert(
  JSON.stringify(filter([], (x) => x > 0)) === JSON.stringify([]),
  "Test 4 Failed: Boş dizi için boş dönmeli"
);

// Test 5: Hepsi false
console.assert(
  JSON.stringify(filter([1, 2, 3], (x) => false)) === JSON.stringify([]),
  "Test 5 Failed: Hepsi false ise boş dönmeli"
);
