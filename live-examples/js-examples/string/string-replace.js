const p =
    'Гей, хлопці, не вспію - на ґанку ваша файна їжа знищується бурундучком. Певне справді файна була!';

console.log(p.replace('файна', 'смачна'));
// очікуваний вивід: "Гей, хлопці, не вспію - на ґанку ваша смачна їжа знищується бурундучком. Певне справді файна була!"

const regex = /Файна/i;
console.log(p.replace(regex, 'гаряча'));
// очікуваний вивід: "Гей, хлопці, не вспію - на ґанку ваша гаряча їжа знищується бурундучком. Певне справді файна була!"
