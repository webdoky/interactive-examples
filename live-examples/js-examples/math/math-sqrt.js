function calcHypotenuse(a, b) {
  return (Math.sqrt((a * a) + (b * b)));
}

console.log(calcHypotenuse(3, 4));
// очікуваний вивід: 5

console.log(calcHypotenuse(5, 12));
// очікуваний вивід: 13

console.log(calcHypotenuse(0, 0));
// очікуваний вивід: 0
