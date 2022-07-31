try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
  // очікуваний вивід: ReferenceError: nonExistentFunction is not defined
  // Примітка: повідомлення про помилку відрізняються залежно від браузера
}
