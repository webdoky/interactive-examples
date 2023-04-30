const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// В суворому режимі викидає помилку

console.log(obj.prop);
// Очікуваний вивід: 42
