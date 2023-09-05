const object1 = {
  prop: 'існує'
};

console.log(Object.hasOwn(object1, 'prop'));
// Очікуваний вивід: true

console.log(Object.hasOwn(object1, 'toString'));
// Очікуваний вивід: false

console.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));
// Очікуваний вивід: false
