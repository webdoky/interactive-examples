const foo = null ?? 'усталений рядок';
console.log(foo);
// Очікуваний вивід: "усталений рядок"

const baz = 0 ?? 42;
console.log(baz);
// Очікуваний вивід: 0
