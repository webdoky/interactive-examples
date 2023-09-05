const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// очікуваний вивід: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// очікуваний вивід: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// очікуваний вивід: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// очікуваний вивід: Array [0, 1, 2, 3, 4, 5]
