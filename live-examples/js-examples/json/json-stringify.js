console.log(JSON.stringify({ x: 5, y: 6 }));
// очікуваний вивід: "{"x":5,"y":6}"

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// очікуваний вивід: "[3,"false",false]"

console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
// очікуваний вивід: "{"x":[10,null,null,null]}"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// очікуваний вивід: ""2006-01-02T15:04:05.000Z""
