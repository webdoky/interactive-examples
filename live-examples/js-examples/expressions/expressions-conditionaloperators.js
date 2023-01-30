function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true));
// Очікуваний вивід: "$2.00"

console.log(getFee(false));
// Очікуваний вивід: "$10.00"

console.log(getFee(null));
// Очікуваний вивід: "$10.00"
