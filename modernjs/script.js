//functions - A way to group code together.
//Multiple ways to create a function

function greeting(name, seat){
    console.log(`Hello ${name}! You are seated at ${seat}.`)

}
greeting('Bovi', 12);

//default parameters
function regUser(user = 'Bovi'){
    return `Hello ${user}`;

}
console.log(regUser())

//Rest parameter
function sum(...nums){
    let total = 0;
    for(const num of nums){
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//objects as parameters
function person(name, age){
    return `Hello ${name}, you are ${age} years old.`
}
let user = {name: 'Bovi', age: 30};
console.log(person(user.name, user.age));
console.log(person('Maggie', 25));

//arrays as parameters
function getRandom(arr){
    let randomIndex = Math.floor(Math.random() * arr.length);
    let item =  arr[randomIndex];
    console.log(item);
}
getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);