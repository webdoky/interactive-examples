console.log(Array.from('foo'));
// очікуваний вивід: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// очікуваний вивід: Array [2, 4, 6]
