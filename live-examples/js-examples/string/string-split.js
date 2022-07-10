const str = 'Гей, хлопці, не вспію - на ґанку ваша файна їжа знищується бурундучком.';

const words = str.split(' ');
console.log(words[3]);
// очікуваний вивід: "вспію"

const chars = str.split('');
console.log(chars[8]);
// очікуваний вивід: "п"

const strCopy = str.split();
console.log(strCopy);
// очікуваний вивід: Array ["Гей, хлопці, не вспію - на ґанку ваша файна їжа знищується бурундучком."]
