const str1 = '5';

console.log(str1.padStart(2, '0'));
// Очікуваний вивід: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// Очікуваний вивід: "************5581"
