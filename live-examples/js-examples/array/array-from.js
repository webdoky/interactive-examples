console.log(Array.from('foo'));
// Очікуваний вивід: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// Очікуваний вивід: Array [2, 4, 6]
