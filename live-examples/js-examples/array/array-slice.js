const animals = ['мураха', 'зубр', 'верблюд', 'качка', 'слон'];

console.log(animals.slice(2));
// очікуваний вивід: Array ['верблюд', 'качка', 'слон']

console.log(animals.slice(2, 4));
// очікуваний вивід: Array ['верблюд', 'качка']

console.log(animals.slice(1, 5));
// очікуваний вивід: Array ['зубр', 'верблюд', 'качка', 'слон']

console.log(animals.slice(-2));
// очікуваний вивід: Array ['качка', 'слон']

console.log(animals.slice(2, -1));
// очікуваний вивід: Array ['верблюд', 'качка']

console.log(animals.slice());
// очікуваний вивід: Array ['мураха', 'зубр', 'верблюд', 'качка', 'слон']
