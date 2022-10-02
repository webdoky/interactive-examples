const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// очікуваний вивід: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// очікуваний вивід: [0, 1, 2, [3, 4]]
