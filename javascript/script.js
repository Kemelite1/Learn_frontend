'use strict';

let appleShelf = document.getElementById('apples');
let bananaShelf = document.getElementById('bananas');

let fruits = ['🍊', '🍌', '🍊', '🍌'];

function arrangeFruits(){
    for (let i = 0; i < fruits.length; i++){
        if (fruits[i] === '🍊'){
            appleShelf.textContent += fruits[i];
        } else if (fruits[i] === '🍌'){
            bananaShelf.textContent += fruits[i];
        }
    }
}

// Call the function to arrange fruits
arrangeFruits();
