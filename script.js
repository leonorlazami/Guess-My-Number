'use strict';

let secretNumber = Math.trunc(Math.random() * 20);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message

}

document.querySelector('.check').addEventListener('click', function (e) {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('No Number!')
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!')
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }


        if (isNightMode) {
            toggleMode();
            updateNightModeStyles();
        }



    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high' : 'Too low')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game')
            document.querySelector('.score').textContent = 0;
        }
    }

});

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing!';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    secretNumber = Math.trunc(Math.random() * 20);
    document.querySelector('.highscore').textContent = highscore
});

let isNightMode = false;

function toggleMode() {
    isNightMode = !isNightMode;
}

function updateNightModeStyles() {
    document.querySelector('body').classList.toggle('toggle-night-mode');
    document.querySelector('header').classList.toggle('toggle-night-mode');
    document.querySelector('main').classList.toggle('toggle-night-mode');
    document.querySelector('.guess').classList.toggle('toggle-night-mode');
    document.querySelector('.nightmode').style.backgroundColor = isNightMode ? '#222' : 'white';
    document.querySelector('.nightmode').textContent = isNightMode ? '🌞' : '🌙';
}

document.querySelector('.nightmode').addEventListener('click', function () {
    toggleMode();
    updateNightModeStyles();
});
