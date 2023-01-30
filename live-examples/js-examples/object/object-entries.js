const object1 = {
  a: 'якийсь рядок',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// Очікуваний вивід:
// "a: якийсь рядок"
// "b: 42"
