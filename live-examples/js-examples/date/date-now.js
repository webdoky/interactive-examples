// виконання цього прикладу займає 2 секунди
const start = Date.now();

console.log('запуск таймера...');
// очікуваний вивід: запуск таймера...

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`секунд сплило = ${Math.floor(millis / 1000)}`);
  // очікуваний вивід: секунд сплило = 2
}, 2000);
