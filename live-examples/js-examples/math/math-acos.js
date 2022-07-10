// Обраховує кут прямокутного трикутника в радіанах
function calcAngle(adjacent, hypotenuse) {
  return Math.acos(adjacent / hypotenuse);
}

console.log(calcAngle(8, 10));
// очікуваний вивід: 0.6435011087932843

console.log(calcAngle(5, 3));
// очікуваний вивід: NaN
