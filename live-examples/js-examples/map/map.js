const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Очікуваний вивід: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Очікуваний вивід: 97

console.log(map1.size);
// Очікуваний вивід: 3

map1.delete('b');

console.log(map1.size);
// Очікуваний вивід: 2
