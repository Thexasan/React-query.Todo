// Исходная строка
var dateString = "Tuesday, August 1, 11:30am";

// Месяцы в текстовом формате для преобразования
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Разбиваем строку на части
var parts = dateString.split(" ");

// Извлекаем день, месяц и время
var day = parseInt(parts[2], 10);
var month = months.indexOf(parts[1]) + 1; // добавляем 1, так как месяцы в объекте Date начинаются с 0
var year = new Date().getFullYear(); // получаем текущий год
var time = parts[3].split(":");
var hours = parseInt(time[0], 10);
var minutes = parseInt(time[1], 10);

// Создаем новый объект Date
var dateObject = new Date(year, month - 1, day, hours, minutes);

console.log(dateObject);
