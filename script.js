'use strict';



let secretNumber = Math.trunc(Math.random() * 20)


let score = 20;




document.querySelector('.check').addEventListener('click', function (e) {
    const guess = Number(document.querySelector('.guess').value)
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!'
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!'
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'


    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!'
            score--;
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'You lost the game'
            document.querySelector('.score').textContent = 0
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low'
            score--;
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'You lost the game'
            document.querySelector('.score').textContent = 0

        }
    }

})


document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.score').textContent = 20
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'No Number!'
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem'
    secretNumber = Math.trunc(Math.random() * 20)

})


let isNightMode = false
function toggleMode() {
    isNightMode = !isNightMode
}
document.querySelector('.nightmode').addEventListener('click', function () {
    toggleMode()
    document.querySelector('body').classList.toggle('toggle-night-mode')
    document.querySelector('header').classList.toggle('toggle-night-mode')
    document.querySelector('main').classList.toggle('toggle-night-mode')
    document.querySelector('.guess').classList.toggle('toggle-night-mode')
    document.querySelector('.nightmode').style.backgroundColor = isNightMode ? '#222' : 'white';
    document.querySelector('.nightmode').textContent = isNightMode ? '🌞' : '🌙'


})