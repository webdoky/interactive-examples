const plants = ['броколі', 'цвітна капуста', 'білоголова капуста', 'пекінська капуста', 'помідор'];

console.log(plants.pop());
// Очікуваний вивід: "помідор"

console.log(plants);
// Очікуваний вивід: Array ["броколі", "цвітна капуста", "білоголова капуста", "пекінська капуста"]

plants.pop();

console.log(plants);
// Очікуваний вивід: Array ["броколі", "цвітна капуста", "білоголова капуста"]
