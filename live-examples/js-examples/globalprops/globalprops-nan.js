function sanitise(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitise('1'));
// Очікуваний вивід: "1"

console.log(sanitise('NotANumber'));
// Очікуваний вивід: NaN
