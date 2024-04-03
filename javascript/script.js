'use strict';

//a blackjack game
//a hand that gets close to/21 but never above 21. if you get 21, you are out.
let messageElement = document.getElementById('message-paragraph');
let sumElement = document.getElementById('sum-paragraph');
let cardsElement = document.getElementById('cards-paragraph');
//create two variables, firstCard and secondCard, and set their values to a random number between 2 and 11 
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [ firstCard, secondCard]
let hasBlackJack = false;
let isAlive = true;
let message = "";

//create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard;

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
    resetGame();
}

function resetGame(){
    for (let i = 0; i < cards.length; i++){
    }
    if (sum <= 20){
        message = `Do you want to draw a new card? 😉`;
    } else if (sum === 21){
        message = `You've got Blackjack! 🤑`;
        hasBlackJack = true;
    } else{
        message = `You're out of the game! 😥`;
        isAlive = false;
    }
    messageElement.textContent = message;
    sumElement.textContent = `Sum: ${sum}`;
    cardsElement.textContent = `Cards: ${cards}`;
}

function newCard(){
    let card = getRandomCard() //card variable
    sum += card; //add card to sum variable
    cards.push(card); //add card to cards array
    resetGame();

}


