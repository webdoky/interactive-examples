const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// очікуваний вивід: true

console.log(object1.hasOwnProperty('toString'));
// очікуваний вивід: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// очікуваний вивід: false
