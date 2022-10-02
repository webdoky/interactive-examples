const event = new Date('05 October 2011 14:48 UTC');
console.log(event.toString());
// очікуваний вивід: Wed Oct 05 2011 17:48:00 GMT+0300 (Eastern European Summer Time)
// (примітка: ваш часовий пояс може відрізнятися)

console.log(event.toISOString());
// очікуваний вивід: 2011-10-05T14:48:00.000Z
