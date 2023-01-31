const str = 'table football';

const regex = new RegExp('foo*');
const globalRegex = new RegExp('foo*', 'g');

console.log(regex.test(str));
// Очікуваний вивід: true

console.log(globalRegex.lastIndex);
// Очікуваний вивід: 0

console.log(globalRegex.test(str));
// Очікуваний вивід: true

console.log(globalRegex.lastIndex);
// Очікуваний вивід: 9

console.log(globalRegex.test(str));
// Очікуваний вивід: false
