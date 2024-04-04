'use strict';

//a chrome extension

let inputElement = document.getElementById('input-field');
let inputButton = document.getElementById('save-btn');
let myLeads = [];

    inputButton.addEventListener('click', () => {
        myLeads.push(inputElement.value);
        console.log(myLeads);
    })