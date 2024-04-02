'use strict';

let countElement = document.getElementById('counter')
let saveElement = document.getElementById('save-data');
let count = 0;


function increment(){
    count++;
    countElement.innerText = count;
    console.log(count);
}

//a function, save(), that logs the count when it's called
function save(){

    let countStr = count + ' - ';
    saveElement.textContent += countStr;
    console.log(count);
    countElement.innerText = 0;
    count = 0;
}


