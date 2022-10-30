const regex1 = RegExp('foo*', 'g');
const str1 = 'table football, foosball';
let array1;

while ((array1 = regex1.exec(str1)) !== null) {
  console.log(`Знайдено ${array1[0]}. Наступний пошук починається на ${regex1.lastIndex}.`);
  // очікуваний вивід: "Знайдено foo. Наступний пошук починається на 9."
  // очікуваний вивід: "Знайдено foo. Наступний пошук починається на 19."
}
