function testNum(a) {
  let result;
  if (a > 0) {
    result = 'додатне';
  } else {
    result = 'НЕ додатне';
  }
  return result;
}

console.log(testNum(-5));
// очікуваний вивід: "НЕ додатне"
