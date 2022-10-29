function sanitise(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitise('1'));
// очікуваний вивід: "1"

console.log(sanitise('NotANumber'));
// очікуваний вивід: NaN
