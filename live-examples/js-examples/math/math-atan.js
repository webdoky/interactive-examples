// Обраховує кут прямокутного трикутника в радіанах
function calcAngle(opposite, adjacent) {
  return Math.atan(opposite / adjacent);
}

console.log(calcAngle(8, 10));
// Очікуваний вивід: 0.6747409422235527

console.log(calcAngle(5, 3));
// Очікуваний вивід: 1.0303768265243125
