console.log(parseInt('123'));
// 123 (усталена основа – 10)
console.log(parseInt('123', 10));
// 123 (явно задана основа 10)
console.log(parseInt('   123 '));
// 123 (пробіли ігноруються)
console.log(parseInt('077'));
// 77 (нулі на початку ігноруються)
console.log(parseInt('1.9'));
// 1 (дробова частина обрізається)
console.log(parseInt('ff', 16));
// 255 (шістнадцяткове в нижньому регістрі)
console.log(parseInt('0xFF', 16));
// 255 (шістнадцяткове в вищому регістрі з префіксом "0x")
console.log(parseInt('xyz'));
// NaN (не може бути перетворено на ціле число)
