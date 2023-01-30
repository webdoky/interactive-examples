const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Очікуваний вивід: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Очікуваний вивід: true
