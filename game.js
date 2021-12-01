// 1. user can click on any button to disable it
// 2. clicking on reset should re-enable every button

// every element in an object

// var p = {
//     textContent: 'hello'
// }
// }
console.log('hello sailor');
var secretNumber = 7;//hardcode for conveience
var allChoices = document.querySelectorAll('.choices');
var choiceOne = document.querySelectorAll('.choices')[0];
var numberOfGuesses = document.querySelector('.guess-number');

var guessNumber = 0;
var messageDiv = document.querySelector('.message-div');

function handleUserGuess(event) {
    guessNumber++;
    numberOfGuesses.textContent = guessNumber;
    let theOneTheUserClickedOn = event.target;
    theOneTheUserClickedOn.disabled = true;
    
    let userGuess = Number(theOneTheUserClickedOn.textContent);
    //let userGuess = Number(theOneTheUserClickedOn.dataset.number); uses stored data type instead of text content

    // var messageDiv = document.querySelector('.message-div');
    if (guessNumber <= 3) {
        if (userGuess === secretNumber) {
                messageDiv.textContent = 'Amazing job';
                for (let i = 0; i < allChoices.length; i++) {
                    allChoices[i].disabled = true;
                }
            }
        } else {
            messageDiv.textContent = 'GAME OVER';
                for (let i = 0; i < allChoices.length; i++) {
                    allChoices[i].disabled = true;
        }
    }
}

allChoices.forEach(function(button) {
    button.addEventListener('click', handleUserGuess)
})

//wrting the same function but with a loop shown below

// for (var i = 0; i < allChoices.length; i++) {
//     var button = allChoices[i];
//     button.addEventListener('click', handleUserGuess)
// }

var resetButton = document.querySelector('.reset');

function resetGuess() {
    for (let i = 0; i < allChoices.length; i++) {
        allChoices[i].disabled = false;
        guessNumber = 0;
        numberOfGuesses.textContent = 0;
        messageDiv.textContent = '';
    }
}

resetButton.addEventListener('click', resetGuess);