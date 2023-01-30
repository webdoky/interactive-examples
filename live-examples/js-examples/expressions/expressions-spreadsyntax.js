function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// Очікуваний вивід: 6

console.log(sum.apply(null, numbers));
// Очікуваний вивід: 6
