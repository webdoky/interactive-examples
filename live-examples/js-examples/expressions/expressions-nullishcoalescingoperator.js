const foo = null ?? 'усталений рядок';
console.log(foo);
// очікуваний вивід: "усталений рядок"

const baz = 0 ?? 42;
console.log(baz);
// усталений рядок: 0
