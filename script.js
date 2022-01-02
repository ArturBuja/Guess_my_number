'use strict';
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const check = document.querySelector('.btn.check');
const highscore = document.querySelector('.highscore');
const body = document.querySelector('body');


const secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;

number.textContent = String(secretNumber);
let scoreNumber = 20;
check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'No number!';
  } else if (guess === secretNumber) {
    message.textContent = `Correct number!`;
    highscore.textContent = String(scoreNumber);
    body.style.backgroundColor = `#60b347`;
    number.style.width = `30rem`

  } else if (guess > secretNumber) {
    if (scoreNumber > 1) {
      message.textContent = `Too high`;
      scoreNumber--;
      score.textContent = String(scoreNumber);
    } else {
      message.textContent = `You lost the game!`;
      score.textContent = '0';
    }
  } else if (guess < secretNumber) {

    if (scoreNumber > 1) {
      message.textContent = `Too low`;
      scoreNumber--;
      score.textContent = String(scoreNumber);
    } else {
      message.textContent = `You lost the game!`;
      score.textContent = '0';
    }
  }

});

