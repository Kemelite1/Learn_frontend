'use strict';

//a blackjack game
//a hand that gets close to/21 but never above 21. if you get 21, you are out.
let messageElement = document.getElementById('message-paragraph');
let sumElement = document.getElementById('sum-paragraph');
let cardsElement = document.getElementById('cards-paragraph');
let playerElement = document.getElementById('player-data');


let player = {
    name: 'Trevor',
    chips: 500
}
let cards = []
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sum = 0;
playerElement.textContent = `${player.name}: $${player.chips}`;


function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 12) + 2;
    if (randomCard === 1){
        return 11;
        } else if (randomCard > 10){
            return 10;
        } else {
            return randomCard;
        }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame(){
    for (let i = 0; i < cards.length; i++){
        cardsElement.textContent = `Cards: ${cards}`;
    }
    if (sum <= 20){
        message = `Do you want to draw a new card? 😉`;
    } else if (sum === 21){
        message = `You've got Blackjack! 🤑`;
        hasBlackJack = true;
        player.chips += 20;
    } else{
        message = `You're out of the game! 😥`;
        isAlive = false;
        player.chips -= 10;
    }
    messageElement.textContent = message;
    sumElement.textContent = `Sum: ${sum}`;
    playerElement.textContent = `${player.name}: $${player.chips}`;
    
}

function newCard(){
    if (!isAlive && message === `You're out of the game! 😥`){
        return;
    }
    let card = getRandomCard() //card variable
    sum += card; //add card to sum variable
    cards.push(card); //add card to cards array
    renderGame();

}


