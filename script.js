
// My Own Code { ///////////////////////////////////////////////// }
// SHARIFUL ISLAM //
/////////// DATA Variable////////////////////
let score = 20;
let highscore = 0;
// SELECTION  ///////////////////////////////////////////////////////////
let secretNumber = Math.trunc(Math.random() * 10) + 1;
const btnAgain = document.querySelector('.again');
const guessNumber = document.querySelector('.guess');
let number = document.querySelector('.number');
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
let scoreEl = document.querySelector('.score');
let highscoreEl = document.querySelector('.highscore');
const bodyEl = document.querySelector('body');
// Score store 
scoreEl.textContent = score;
// FUNCTION //////////////////////////////////////////////////////////// 
const displayMessage = function (messages) {
    message.textContent = messages;
}
////////////////////////////// GAME LOGIG AND   FUNCTIONALITY/////////////////////////////
btnCheck.addEventListener('click', function () {
    // Convert string to Number ///////////////////////////
    const guess = Number(guessNumber.value);
    // No Number Type /////////////////////// 
    if (!guess) {
        displayMessage('No Number ')
    }
    //  Right  guess ///////////////////////////////////////////////////////////////
    else if (guess === secretNumber) {
        displayMessage('Correct Number ')
        bodyEl.style.background = '#60b347';
        number.style.width = '20rem';
        number.textContent = secretNumber;
        // for High score store//////////////////////
        if (score > highscore) {
            highscore = score;
            highscoreEl.textContent = highscore;
        }
    }
    //  Wrong guess ///////////////////////////////////////////////////////////////
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too High' : 'Too Low ');
            score--;
            scoreEl.textContent = score;
        } else {
            displayMessage('You Lose The Game ');
            alert("You Losse The Game  Plaease Try Again")
            scoreEl.textContent = 0;
        }
    }
});
// Play Again Functioality ///////////////////////////////////////////
btnAgain.addEventListener('click', function () {
    score = 20;
    scoreEl.textContent = score;
    bodyEl.style.background = '#222';
    secretNumber = Math.trunc(Math.random() * 10) + 1;
    number.textContent = secretNumber;
    guessNumber.value = "";
    number.textContent = '?';
    displayMessage('Start guessing...')
});