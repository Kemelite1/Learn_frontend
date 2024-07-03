// numbers
let num = 5.7863;
n = num.toFixed(2) // 5.79
n = num.toPrecision(2); // 5.8
n = Math.round(num); // 6
n = Math.floor(num); // 5
n = Math.ceil(num); // 6
n = Math.random(); // random number between 0 and 1
n = Math.random() * 10; // random number between 0 and 10
n = Math.floor(Math.random() * 10); // random number between 0 and 9
console.log(n);


 let x = Math.floor(Math.random() * 100) + 1;
 let y = Math.floor(Math.random() * 50) + 1;
 //create a varibale for the sum, difference, product, and quotient of x and y
 //log the output in a string that shows the the two numbers of x and y with the operaor and result
 console.log(`The sum of ${x} and ${y} is ${x + y}`);
 console.log(`The difference of ${x} and ${y} is ${x - y}`);
 console.log(`The product of ${x} and ${y} is ${x * y}`);
 console.log(`The quotient of ${x} and ${y} is ${x / y}`);
 console.log(`The remainder of ${x} and ${y} is ${x % y}`);