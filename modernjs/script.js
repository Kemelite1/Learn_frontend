//Object - a data strcture that holds key value pairs
//stores multiple values in a variable

const person = {
    name: 'Trevor Job',
    age: 30,
    city: 'New York',
    isEmployed: true,
    hobbies: ['music', 'movies', 'sports'],
    //nested object
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    },
    //function within an object
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

//Accessing values
x = person.name;
x = person['age'];
x = person.hobbies[0];

//Adding properties
person.email = 'trevor@mail.com';

//Changing properties
person.age = 31;

//Deleting properties
delete person.city;

//Accessing nested objects
x = person.address.city;

person.greet();
//console.log(person);
//console.log(x);

//spread operator
const person2 = {...person, name: 'Becky Jonas', age: 25};
//console.log(person2);

//assign
const person3 = Object.assign({}, person);
//console.log(person3);
//get all keys
const keys = Object.keys(person);
//console.log(keys);
//get all values
const values = Object.values(person);
//console.log(values);
//get all key value pairs
const entries = Object.entries(person);
//get length of object
//console.log(keys.length);
//hasproperty
x = person.hasOwnProperty('name');
//console.log(x);
