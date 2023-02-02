console.log(Array.isArray([1, 3, 5]));
// Очікуваний вивід: true

console.log(Array.isArray('[]'));
// Очікуваний вивід: false

console.log(Array.isArray(new Array(5)));
// Очікуваний вивід: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Очікуваний вивід: false
