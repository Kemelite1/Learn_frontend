'use strict';

//a chrome extension

let inputElement = document.getElementById('input-field');
let saveButton = document.getElementById('save-btn');
let listItems = document.getElementById('list-items')
let myLeads = [];

    saveButton.addEventListener('click', () => {
        myLeads.push(inputElement.value);
        for (let i = 0; i < myLeads.length; i++) {
            listItems.innerHTML += `<li>${myLeads[i]}</li>`;
        }

        })

        