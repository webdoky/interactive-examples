var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // Очікуваний вивід: 2
}

console.log(x);
// Очікуваний вивід: 2
