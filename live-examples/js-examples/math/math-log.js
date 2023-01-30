function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

// 2 x 2 x 2 = 8
console.log(getBaseLog(2, 8));
// Очікуваний вивід: 3

// 5 x 5 x 5 x 5 = 625
console.log(getBaseLog(5, 625));
// Очікуваний вивід: 4
