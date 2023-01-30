const str = 'Гей, хлопці, не вспію - на ґанку ваша файна їжа знищується бурундучком.';

const words = str.split(' ');
console.log(words[3]);
// Очікуваний вивід: "вспію"

const chars = str.split('');
console.log(chars[8]);
// Очікуваний вивід: "п"

const strCopy = str.split();
console.log(strCopy);
// Очікуваний вивід: Array ["Гей, хлопці, не вспію - на ґанку ваша файна їжа знищується бурундучком."]
