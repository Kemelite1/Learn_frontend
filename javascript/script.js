'use strict';

let jogsCompleted = 0

function jogCount(){
    jogsCompleted++;
    console.log(jogsCompleted);
    return jogsCompleted;
}

jogCount();
jogCount();
jogCount();

let countElement = document.getElementById('counter')
let count = 0;

function increment(){
    count++;
    countElement.innerText = count;
    console.log(count);
}

//a function, save(), that logs the count when it's called
function save(){
    console.log(count);
}

