let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const startOver = document.querySelector(".resultParas");
const lowOrHi = document.querySelector(".lowOrHi");

const p = document.createElement('p');

let previousGuesses = [];
let numGuesses = 0;
let playGame = true;

if (playGame) {
    subt.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(guessField.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1!');
    } else if (guess > 100) {
        alert('Please enter a number less than 100!')
    } else {
        previousGuesses.push(guess);
        if (numGuesses === 9) {
            cleanUpGuess(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
            cleanUpGuess(guess);
            checkGuess(guess);
        }
    }
}
    function checkGuess(guess) {
        if (guess === randomNumber) {
            displayMessage(`You Guessed it Right!!`);
            endGame()
        }
        else if (guess < randomNumber) {
            displayMessage(`You Number is TOOO Low!!!`)
        }
         else if (guess > randomNumber) {
            displayMessage(`You Number is TOOO High!!!`)
        }
    }

 function cleanUpGuess(guess) {   //clean up method
     userInput.value = "";
     guessSlot.innerHTML += `${guess}, `;
     numGuesses++;
     remaining.innerHTML = `${10-numGuesses}`
    }

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');   //keyvalue pair   
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });   
};

    