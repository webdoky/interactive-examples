const arr1 = [1, 2, 1];

const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// Очікуваний вивід: Масив [1, 2, 2, 1]
