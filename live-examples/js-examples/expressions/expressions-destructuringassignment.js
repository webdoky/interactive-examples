let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Очікуваний вивід: 10

console.log(b);
// Очікуваний вивід: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Очікуваний вивід: Array [30,40,50]
