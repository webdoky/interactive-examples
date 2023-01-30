const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(event.toLocaleDateString('de-DE', options));
// Очікуваний вивід (залежить від поточного часового поясу): Donnerstag, 20. Dezember 2012

console.log(event.toLocaleDateString('ar-EG', options));
// Очікуваний вивід (залежить від поточного часового поясу): الخميس، ٢٠ ديسمبر، ٢٠١٢

console.log(event.toLocaleDateString(undefined, options));
// Очікуваний вивід (залежить від поточного часового поясу та усталеної локалі): Thursday, 20 December 2012
