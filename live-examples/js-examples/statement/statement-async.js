function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('сповнено');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('виклик');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Очікуваний вивід: "сповнено"
}

asyncCall();
