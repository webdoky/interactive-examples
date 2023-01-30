const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// Очікуваний вивід: true

console.log(object1.hasOwnProperty('toString'));
// Очікуваний вивід: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// Очікуваний вивід: false
