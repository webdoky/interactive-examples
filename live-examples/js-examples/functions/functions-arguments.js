function func1(a, b, c) {
  console.log(arguments[0]);
  // Очікуваний вивід: 1

  console.log(arguments[1]);
  // Очікуваний вивід: 2

  console.log(arguments[2]);
  // Очікуваний вивід: 3
}

func1(1, 2, 3);
