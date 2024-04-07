'use strict';

//a chrome extension

let inputElement = document.getElementById('input-field');
let saveButton = document.getElementById('save-btn');
let listItems = document.getElementById('list-items')
let deleteButton = document.getElementById('delete-btn');
let myLeads = [];

let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));

//check if there are leads in the local storage
//if there are leads in the local storage, assign them to myLeads
//and render them
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

//function to render the leads
        function renderLeads(){
            let items = ""; //holds all the list items
            for (let i = 0; i < myLeads.length; i++) { //loops through the myLeads array
                items += `<li>
                <a href='${myLeads[i]}' target="_blank"> ${myLeads[i]}</a>
                </li>`; //adds the list items to the items variable
            }
            listItems.innerHTML = items; //displays the list items
        }

//add an event listener to the save button
//when the button is clicked, save the input value to myLeads
//then render the leads
//finally, clear the input field
//and save the leads to the local storage
    saveButton.addEventListener('click', () => {
        myLeads.push(inputElement.value);
        renderLeads();
        inputElement.value = '';
        localStorage.setItem('myLeads', JSON.stringify(myLeads));

        })

        

        //add an event listener to the delete button
        //when the button is double clicked, clear the local storage
        //and the myLeads array
        //finally, render the leads
        deleteButton.addEventListener('dblclick', () => {
            localStorage.clear();
            myLeads = [];
            renderLeads();
        })