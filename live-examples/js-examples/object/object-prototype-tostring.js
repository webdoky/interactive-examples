function Dog(name) {
  this.name = name;
}

const dog1 = new Dog('Сірко');

Dog.prototype.toString = function dogToString() {
  return `${this.name}`;
};

console.log(dog1.toString());
// Очікуваний вивід: "Сірко"
