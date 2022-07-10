// Обраховує кут прямокутного трикутника в радіанах
function calcAngle(opposite, hypotenuse) {
  return Math.asin(opposite / hypotenuse);
}

console.log(calcAngle(6, 10));
// очікуваний вивід: 0.6435011087932844

console.log(calcAngle(5, 3));
// очікуваний вивід: NaN
