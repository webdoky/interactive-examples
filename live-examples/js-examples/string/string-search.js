const paragraph = 'Гей, хлопці, не вспію - на ґанку ваша файна їжа знищується бурундучком. Певне справді файна!';

// будь який символ, що не є словесним чи пробільним
// const regex = /[^\w\s]/g;
//
// Екранована послідовність \w в цьому випадку працювати не буде, оскільки вона
// є скороченням для виразу [a-zA-Z0-9_]. Як можна помітити, в ньому немає кириличних
// літер, тому він не вважатиме їх словесними символами.
// Далі в прикладі наведений видозмінена форма виразу `a-zA-Z0-9_`,
// яка реагує на кириличні символи
const regex = /[^а-яА-Я0-9_\s]/g;

console.log(paragraph.search(regex));
// Очікуваний вивід: 3

console.log(paragraph[paragraph.search(regex)]);
// Очікуваний вивід: ","
