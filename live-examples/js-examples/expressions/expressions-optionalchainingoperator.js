const adventurer = {
  name: 'Аліса',
  cat: {
    name: 'Діна'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Очікуваний вивід: undefined

console.log(adventurer.someNonExistentMethod?.());
// Очікуваний вивід: undefined
