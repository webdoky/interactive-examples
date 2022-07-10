function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true));
// очікуваний вивід: "$2.00"

console.log(getFee(false));
// очікуваний вивід: "$10.00"

console.log(getFee(null));
// очікуваний вивід: "$10.00"
