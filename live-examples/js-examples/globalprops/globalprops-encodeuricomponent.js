// закодовує певні символи, наприклад, ?,=,/,&,:
console.log(`?x=${encodeURIComponent('test?')}`);
// Очікуваний вивід: "?x=test%3F"

console.log(`?x=${encodeURIComponent('шеллі')}`);
// Очікуваний вивід: "?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%96"
