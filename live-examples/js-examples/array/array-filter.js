const words = ['спрей', 'межа', 'розкішний', 'згуба', 'еліта', 'дарунок'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// очікуваний вивід: Array ['розкішний', 'дарунок']
