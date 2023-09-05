function getTanFromDegrees(degrees) {
  return Math.tan((degrees * Math.PI) / 180);
}

console.log(getTanFromDegrees(0));
// Очікуваний вивід: 0

console.log(getTanFromDegrees(45));
// Очікуваний вивід: 0.9999999999999999

console.log(getTanFromDegrees(90));
// Очікуваний вивід: 16331239353195370
