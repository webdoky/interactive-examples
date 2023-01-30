const beasts = ['мураха', 'зубр', 'верблюд', 'качка', 'зубр'];

console.log(beasts.indexOf('зубр'));
// Очікуваний вивід: 1

// починаючи з індексу 2
console.log(beasts.indexOf('зубр', 2));
// Очікуваний вивід: 4

console.log(beasts.indexOf('жираф'));
// Очікуваний вивід: -1
