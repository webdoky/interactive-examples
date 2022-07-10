const str1 = 'Коти — найкращі!';

console.log(str1.endsWith('найкращі!'));
// очікуваний вивід: true

console.log(str1.endsWith('найкращі', 15));
// очікуваний вивід: true

const str2 = 'Чи було це запитанням?';

console.log(str2.endsWith('запитанням'));
// очікуваний вивід: false
