const animals = ['свині', 'кози', 'вівці'];

const count = animals.push('корови');
console.log(count);
// очікуваний вивід: 4
console.log(animals);
// очікуваний вивід: Array ["свині", "кози", "вівці", "корови"]

animals.push('кури', 'коти', 'собаки');
console.log(animals);
// очікуваний вивід: Array ["свині", "кози", "вівці", "корови", "кури", "коти", "собаки"]
