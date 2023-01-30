function test(t) {
  if (t === undefined) {
    return 'Невизначене значення!';
  }
  return t;
}

let x;

console.log(test(x));
// Очікуваний вивід: "Невизначене значення!"
