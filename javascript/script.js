'use strict';

let firstNum = 30;
let secondNum = 10;
document.getElementById('first-num').textContent = firstNum;
document.getElementById('second-num').textContent = secondNum;
let sumTotal = document.getElementById('sum-total')

function add(){
    let sum = firstNum + secondNum;
    sumTotal.textContent =  "Total: " + sum;
}

function subtract(){
    let sum = firstNum - secondNum;
    sumTotal.textContent = "Total: " + sum;

}

function divide(){
    let sum = firstNum / secondNum;
     sumTotal.textContent = "Total: " +  sum;

}

function multiply(){
    let sum = firstNum * secondNum;
    sumTotal.textContent =  "Total: " + sum;

}