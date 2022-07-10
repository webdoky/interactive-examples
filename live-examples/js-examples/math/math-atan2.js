function calcAngleDegrees(x, y) {
  return Math.atan2(y, x) * 180 / Math.PI;
}

console.log(calcAngleDegrees(5, 5));
//очікуваний вивід: 45

console.log(calcAngleDegrees(10, 10));
//очікуваний вивід: 45

console.log(calcAngleDegrees(0, 10));
//очікуваний вивід: 90
