const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Очікуваний вивід: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Очікуваний вивід: Array ["test2", "e", "st2", "2"]
