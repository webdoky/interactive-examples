const promise1 = Promise.resolve(123);

promise1.then((value) => {
  console.log(value);
  // Очікуваний вивід: 123
});
