// виконання цього прикладу займає 2 секунди
const start = Date.now();

console.log('запуск таймера...');
// Очікуваний вивід: запуск таймера...

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`секунд сплило = ${Math.floor(millis / 1000)}`);
  // Очікуваний вивід: секунд сплило = 2
}, 2000);
