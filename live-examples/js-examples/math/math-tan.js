function getTanFromDegrees(degrees) {
  return Math.tan(degrees * Math.PI / 180);
}

console.log(getTanFromDegrees(0));
// очікуваний вивід: 0

console.log(getTanFromDegrees(45));
// очікуваний вивід: 0.9999999999999999

console.log(getTanFromDegrees(90));
// очікуваний вивід: 16331239353195370
