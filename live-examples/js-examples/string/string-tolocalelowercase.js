const dotted = 'İstanbul';

console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
// очікуваний вивід: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);
// очікуваний вивід: "istanbul"
