const beasts = ['мураха', 'зубр', 'верблюд', 'качка', 'зубр'];

console.log(beasts.indexOf('зубр'));
// очікуваний вивід: 1

// починаючи з індексу 2
console.log(beasts.indexOf('зубр', 2));
// очікуваний вивід: 4

console.log(beasts.indexOf('жираф'));
// очікуваний вивід: -1
