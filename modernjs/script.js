//primitive data types - data types that are not objects and have no methods
//stored directly in memory(stack)

//string - sequence of characters. Must be enclosed in quotes (single or double)/ backticks
let fname = 'Trevor';
console.log(fname);
console.log(typeof fname);

//number - integers, floats, decimals
let age = 20;
console.log(age);
console.log(typeof age);
let temperature = 36.7;
console.log(temperature);
console.log(typeof temperature);

//boolean - true or false
let isApproved = true;
console.log(isApproved);
console.log(typeof isApproved);

//undefined - a variable that has been declared but not assigned a value
let lastName;
console.log(lastName);
console.log(typeof lastName);

//null - a variable that has been declared and assigned the value null (no value)
let selectedColor = null;
console.log(selectedColor);
console.log(typeof selectedColor);

//bigint - a large integer value
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber);

//symbol - a unique value that's not equal to any other value
let sym1 = Symbol('hello');
let sym2 = Symbol('hello');
console.log(sym1 === sym2);
console.log(typeof sym1);

//reference data types - stored in the heap
//accessed by reference, objects that are stored in memory

//object - collection of key value pairs
let person = {
    name: 'John',
    age: 30
};
console.log(person);
console.log(typeof person);

//array - a collection of values
let colors = ['red', 'blue'];
console.log(colors);
console.log(typeof colors);

//functions - a block of code that can be called by name
function greet() {
    console.log('Howdy');
}

