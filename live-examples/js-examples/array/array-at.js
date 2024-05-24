const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Індекс ${index} повертає ${array1.at(index)}`);
// Очікуваний вивід: "Індекс 2 повертає 8"

index = -2;

console.log(`Індекс ${index} повертає ${array1.at(index)}`);
// Очікуваний вивід: "Індекс -2 повертає 130"
