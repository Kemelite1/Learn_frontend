//type conversion

//string to number
let score = '100';
score = +score;
score = Number(score);
score = parseInt(score);
console.log(score, typeof score);

//string to decimal
let decimal = '22.3';
decimal = parseFloat(decimal);
console.log(decimal, typeof decimal);

//number to string
let number = 100;
number = number.toString();
number = String(number);
console.log(number, typeof number);

//number to boolean
let bool = 0; //0 is false, 1 is true
bool = Boolean(bool);
console.log(bool, typeof bool);