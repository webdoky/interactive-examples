const paragraph = 'Гей, хлопці, не вспію - на ґанку ваша файна їжа знищується бурундучком. Певне справді файна!';
const regex = /[А-Я]/g;
const found = paragraph.match(regex);

console.log(found);
// Очікуваний вивід: Array ["Г", "П"]
