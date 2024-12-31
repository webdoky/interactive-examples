function milliseconds(x) {
  if (isNaN(x)) {
    return 'Not a Number!';
  }
  return x * 1000;
}

console.log(milliseconds('100F'));
// Очікуваний результат: "Not a Number!"

console.log(milliseconds('0.0314E+2'));
// Очікуваний результат: 3140
