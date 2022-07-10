const str1 = 'Привіт';
const str2 = 'Світе';

console.log(str1.concat(' ', str2));
// очікуваний вивід: "Привіт Світе"

console.log(str2.concat(', ', str1));
// очікуваний вивід: "Світе, Привіт"
