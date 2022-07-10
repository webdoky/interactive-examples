const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// очікуваний вивід: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// очікуваний вивід: Object { a: 1, b: 4, c: 5 }
