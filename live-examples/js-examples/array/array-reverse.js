const array1 = ['один', 'два', 'три'];
console.log('array1:', array1);
// очікуваний вивід: "array1:" Array ["один", "два", "три"]

const reversed = array1.reverse();
console.log('розвернуто:', reversed);
// очікуваний вивід: "розвернуто:" Array ["три", "два", "один"]

// Обережно: reverse – руйнівний метод: він вносить зміни у вихідний масив.
console.log('array1:', array1);
// очікуваний вивід: "array1:" Array ["три", "два", "один"]
