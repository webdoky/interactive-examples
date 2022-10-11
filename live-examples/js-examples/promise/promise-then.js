const promise1 = new Promise((resolve, reject) => {
  resolve('Успіх!');
});

promise1.then((value) => {
  console.log(value);
  // очікуваний вивід: "Успіх!"
});
