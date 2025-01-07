function milliseconds(x) {
  if (isNaN(x)) {
    return 'Не число!';
  }
  return x * 1000;
}

console.log(milliseconds('100F'));
// Очікуваний результат: "Не число!"

console.log(milliseconds('0.0314E+2'));
// Очікуваний результат: 3140
