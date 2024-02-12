'use strict';



const secretNumber = Math.trunc(Math.random() * 20)
console.log('number', secretNumber)

let score = 20;
let highscore = 0



document.querySelector('.check').addEventListener('click', function (e) {
    const guess = Number(document.querySelector('.guess').value)
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!'
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!'
        document.querySelector('.number').textContent = secretNumber
        highscore++;
        document.querySelector('.highscore').textContent = highscore
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