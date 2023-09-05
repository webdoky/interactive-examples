const person1 = {};
person1['firstname'] = 'Маріуш';
person1['lastname'] = 'Блащак';

console.log(person1.firstname);
// Очікуваний вивід: "Маріуш"

const person2 = {
  firstname: 'Андрій',
  lastname: 'Мельник',
};

console.log(person2['lastname']);
// Очікуваний вивід: "Мельник"
