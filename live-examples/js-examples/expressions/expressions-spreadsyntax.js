function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// очікуваний вивід: 6

console.log(sum.apply(null, numbers));
// очікуваний вивід: 6
