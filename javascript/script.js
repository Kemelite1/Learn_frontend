'use strict';

//when the user clicks on the purchase button, render out
//"ooooops! Something went wrong, please try again" in the paragraph
//that has the id="error-message"

let errorMessage = document.getElementById('error-message');

function purchase(){
    errorMessage.textContent = 'ooooops! Something went wrong, please try again';
}



