function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Очікуваний вивід: 0, 1 or 2

console.log(getRandomInt(1));
// Очікуваний вивід: 0

console.log(Math.random());
// Очікуваний вивід: a number from 0 to <1
