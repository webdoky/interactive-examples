const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // Очікуваний вивід: TypeError: invalid assignment to const `number'
  // (Примітка: конкретний вивід може залежати від браузера)
}

console.log(number);
// Очікуваний вивід: 42
