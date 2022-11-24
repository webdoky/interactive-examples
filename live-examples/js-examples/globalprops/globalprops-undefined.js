function test(t) {
  if (t === undefined) {
    return 'Невизначене значення!';
  }
  return t;
}

let x;

console.log(test(x));
// очікуваний вивід: "Невизначене значення!"
