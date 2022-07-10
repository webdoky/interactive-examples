const str = 'Гей, хлопці, не вспію - на ґанку ваша файна їжа знищується бурундучком і в\'юном.';

const iterator = str[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== ' ') {
  console.log(theChar.value);
  theChar = iterator.next();
  // очікуваний вивід: "Г"
  //                   "е"
  //                   "й"
  //                   ","
}
