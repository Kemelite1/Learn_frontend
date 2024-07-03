//date time 
let date;
date = new Date();
console.log(date);
x = date.getMonth();
x = date.getDate();
x = date.getDay();
x = date.getFullYear();
x = date.getHours();
x = date.getMinutes();
x = date.getSeconds();
x = date.getMilliseconds();

x = Intl.DateTimeFormat('en-NG').format(date);
x = date.toLocaleDateString('en-NG', {month: 'long'});
x = date.toLocaleDateString('en-NG', {weekday: 'long'});
x = date.toLocaleString('en-NG', {year: 'numeric'});
console.log(x, typeof x);

