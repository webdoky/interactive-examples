const number = 123456.789;

console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
// очікуваний вивід: "123.456,79 €"

// Японська єна не використовує дробових значень
console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));
// очікуваний вивід: "￥123,457"

// Обмеження до трьох знаків після десяткового розділювача
console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
// очікуваний вивід: "1,23,000"
