'use strict';

let welcomeElement = document.getElementById('welcome-message');
let userName = 'Trevor ';
let greeting = 'Welcome onboard';
let message = greeting + ' ' + userName;

function welcomeMessage(){
    welcomeElement.innerText = message + '👋';
    console.log(message);
}
welcomeMessage();
