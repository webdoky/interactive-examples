function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// очікуваний вивід: 0, 1 or 2

console.log(getRandomInt(1));
// очікуваний вивід: 0

console.log(Math.random());
// очікуваний вивід: a number from 0 to <1
