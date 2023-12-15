const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('агов');
  }, 300);
});

promise1.then((value) => {
  console.log(value);
  // Очікуваний вивід: "агов"
});

console.log(promise1);
// Очікуваний вивід: [object Promise]
