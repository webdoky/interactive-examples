const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

console.log(`${name1}, ${name2}`);
// очікуваний вивід: "Amélie, Amélie"
console.log(name1 === name2);
// очікуваний вивід: false
console.log(name1.length === name2.length);
// очікуваний вивід: false

const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');

console.log(`${name1NFC}, ${name2NFC}`);
// очікуваний вивід: "Amélie, Amélie"
console.log(name1NFC === name2NFC);
// очікуваний вивід: true
console.log(name1NFC.length === name2NFC.length);
// очікуваний вивід: true
