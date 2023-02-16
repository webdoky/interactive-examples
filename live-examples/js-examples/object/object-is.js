console.log(Object.is('1', 1));
// Очікуваний вивід: false

console.log(Object.is(NaN, NaN));
// Очікуваний вивід: true

console.log(Object.is(-0, 0));
// Очікуваний вивід: false

const obj = {};
console.log(Object.is(obj, {}));
// Очікуваний вивід: false
