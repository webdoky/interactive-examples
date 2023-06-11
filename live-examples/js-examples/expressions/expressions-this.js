const test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};

console.log(test.func());
// Очікуваний вивід: 42
