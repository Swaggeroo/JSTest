let randomNumber = Math.floor(Math.random() * 100) + 1;

let guessCount = 1;
let resetButton;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const inputField = document.getElementById("inputField");
const guessButton = document.getElementById("guessButton");

guessButton.addEventListener('click', checkNumber);

function checkNumber(){
    let number = Number(inputField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += number + ' ';

    if (number === randomNumber){
        lastResult.textContent = 'Right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    }else if (guessCount > 9){
        lastResult.textContent = 'Game Over!';
        lastResult.style.backgroundColor = 'red';
        lowOrHi.textContent = 'The Number was: ' + randomNumber;
        setGameOver();
    }else {
        lastResult.textContent = 'Wrong';
        lastResult.style.backgroundColor = 'red';
        if (number < randomNumber){
            lowOrHi.textContent = 'To Low!';
        }else {
            lowOrHi.textContent = 'To High!';
        }
    }

    guessCount++;
    inputField.value = '';
    inputField.focus();
}

function setGameOver() {
    inputField.disabled = true;
    guessButton.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = 'New Game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}


function resetGame() {
    guessCount = 1;
    lastResult.textContent = '';
    lastResult.style.backgroundColor = '';
    lowOrHi.textContent = '';
    guesses.textContent = '';
    resetButton.parentNode.removeChild(resetButton);
    randomNumber = Math.floor(Math.random() * 100) + 1;
    inputField.value = '';
    inputField.disabled = false;
    guessButton.disabled = false;
    inputField.focus();
}
