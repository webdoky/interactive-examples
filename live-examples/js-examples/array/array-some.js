const array = [1, 2, 3, 4, 5];

// перевіряє, чи єлемент є парним числом
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// очікуваний вивід: true
