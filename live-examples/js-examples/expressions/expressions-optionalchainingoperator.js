const adventurer = {
  name: 'Аліса',
  cat: {
    name: 'Діна'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// очікуваний вивід: undefined

console.log(adventurer.someNonExistentMethod?.());
// очікуваний вивід: undefined
