const elements = ['Вогонь', 'Повітря', 'Вода'];

console.log(elements.join());
// Очікуваний вивід: "Вогонь,Повітря,Вода"

console.log(elements.join(''));
// Очікуваний вивід: "ВогоньПовітряВода"

console.log(elements.join('-'));
// Очікуваний вивід: "Вогонь-Повітря-Вода"
