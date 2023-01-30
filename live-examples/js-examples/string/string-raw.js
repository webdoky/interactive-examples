// Створюється змінна, що позначає шлях у ОС Windows
// без екранування зворотніх скосних рисок:
const filePath = String.raw`C:\Development\profile\aboutme.html`;

console.log(`Файл було завантажено із: ${filePath}`);
// Очікуваний вивід: "Файл було завантажено із: C:\Development\profile\aboutme.html"
