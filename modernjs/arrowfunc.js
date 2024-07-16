//arrow function syntax
const add = (a, b) => {
    return a + b;

}
//console.log(add(50000, 10000));

//implicit return
const subtract = (a, b) => a - b;
//console.log(subtract(50000, 10000));

//const multiply = (a) => a * 10;
const multiply = a => a * 10; //can remove parentheses with a single parameter
//console.log(multiply(50000, 10000));

//returning an object
const user = () => ({
    name: 'Sheldon'
})
//console.log(user());

const getCelsius = (f) => ((f - 32) * 5) / 9;
console.log(`The temperature is ${getCelsius(50)} \xB0C `);

const getFahrenheit = (c) => (c * 9) / 5 + 32;
console.log(`The temperature is ${getFahrenheit(10)} \xB0F `);

const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];

console.log(minMax([10, 26, 3, 14, 65]));

//immediately invoked function
((length, width) => {
    const area = length * width;
    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`
    console.log(output)
})(10, 5);