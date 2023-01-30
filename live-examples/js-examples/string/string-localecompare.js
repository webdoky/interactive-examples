const a = 'réservé'; // із акцентами, в нижньому регістрі
const b = 'RESERVE'; // без акцентів, у верхньому регістрі

console.log(a.localeCompare(b));
// Очікуваний вивід: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Очікуваний вивід: 0
