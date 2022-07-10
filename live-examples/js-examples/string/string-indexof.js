const paragraph = 'Гей, хлопці, не вспію - на ґанку ваша файна їжа знищується бурундучком. Певне справді файна!';

const searchTerm = 'файна';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`Індекс першого від початку слова "${searchTerm}" дорівнює ${indexOfFirst}`);
// очікуваний вивід: "Індекс першого від початку слова "файна" дорівнює 38"

console.log(`Індекс другого слова "${searchTerm}" дорівнює ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// очікуваний вивід: "Індекс другого слова "файна" дорівнює 86"
