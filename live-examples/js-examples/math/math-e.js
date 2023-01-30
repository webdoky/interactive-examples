function compoundOneYear(interestRate, currentVal) {
  return currentVal * (Math.E ** interestRate);
}

console.log(Math.E);
// Очікуваний вивід: 2.718281828459045

console.log((1 + (1 / 1000000)) ** 1000000);
// Очікуваний вивід: 2.718280469 (approximately)

console.log(compoundOneYear(0.05, 100));
// Очікуваний вивід: 105.12710963760242
