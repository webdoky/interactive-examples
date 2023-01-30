const animals = ['мураха', 'зубр', 'верблюд', 'качка', 'слон'];

console.log(animals.slice(2));
// Очікуваний вивід: Array ['верблюд', 'качка', 'слон']

console.log(animals.slice(2, 4));
// Очікуваний вивід: Array ['верблюд', 'качка']

console.log(animals.slice(1, 5));
// Очікуваний вивід: Array ['зубр', 'верблюд', 'качка', 'слон']

console.log(animals.slice(-2));
// Очікуваний вивід: Array ['качка', 'слон']

console.log(animals.slice(2, -1));
// Очікуваний вивід: Array ['верблюд', 'качка']

console.log(animals.slice());
// Очікуваний вивід: Array ['мураха', 'зубр', 'верблюд', 'качка', 'слон']
