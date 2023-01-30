const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// Очікуваний вивід: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// Очікуваний вивід: [0, 1, 2, [3, 4]]
