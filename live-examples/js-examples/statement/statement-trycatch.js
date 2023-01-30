try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
  // Очікуваний вивід: ReferenceError: nonExistentFunction is not defined
  // Примітка: повідомлення про помилку відрізняються залежно від браузера
}
