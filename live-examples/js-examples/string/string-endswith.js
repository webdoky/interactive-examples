const str1 = 'Коти — найкращі!';

console.log(str1.endsWith('найкращі!'));
// Очікуваний вивід: true

console.log(str1.endsWith('найкращі', 15));
// Очікуваний вивід: true

const str2 = 'Чи було це запитанням?';

console.log(str2.endsWith('запитанням'));
// Очікуваний вивід: false
