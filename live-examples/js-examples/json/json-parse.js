const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// очікуваний вивід: 42

console.log(obj.result);
// очікуваний вивід: true
