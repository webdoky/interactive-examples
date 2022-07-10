function compoundOneYear(interestRate, currentVal) {
  return currentVal * (Math.E ** interestRate);
}

console.log(Math.E);
// очікуваний вивід: 2.718281828459045

console.log((1 + (1 / 1000000)) ** 1000000);
// очікуваний вивід: 2.718280469 (approximately)

console.log(compoundOneYear(0.05, 100));
// очікуваний вивід: 105.12710963760242
