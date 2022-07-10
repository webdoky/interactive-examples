const elements = ['Вогонь', 'Повітря', 'Вода'];

console.log(elements.join());
// очікуваний вивід: "Вогонь,Повітря,Вода"

console.log(elements.join(''));
// очікуваний вивід: "ВогоньПовітряВода"

console.log(elements.join('-'));
// очікуваний вивід: "Вогонь-Повітря-Вода"