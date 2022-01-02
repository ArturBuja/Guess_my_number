'use strict';
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const check = document.querySelector('.btn.check');
const highscore = document.querySelector('.highscore');
const body = document.querySelector('body');
const again = document.querySelector('.btn.again');
const guessInput = document.querySelector('.guess');


let secretNumber = Math.trunc(Math.random() * 20) + 1;


// console.log(String(secretNumber));

let scoreNumber = 20;
let highscoreNumber = 0;

check.addEventListener('click', () => {
  let guess = Number(guessInput.value);

  /* Kiedy nie ma żadnego input*/
  if (!guess) {
    message.textContent = 'No number!';

    //  Kiedy gracz wygrywa
  } else if (guess === secretNumber) {
    message.textContent = `Correct number!`;
    body.style.backgroundColor = `#60b347`;
    number.style.width = `30rem`;
    number.textContent = String(secretNumber);

    if (scoreNumber > highscoreNumber) {
      highscoreNumber = scoreNumber;
      highscore.textContent = highscoreNumber;
    }

    // Kiedy liczba jest inna
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      message.textContent = guess > secretNumber ? `Too high` : `Too low`;
      scoreNumber--;
      score.textContent = String(scoreNumber);
    } else {
      message.textContent = `You lost the game!`;
      score.textContent = '0';
    }
  }
});

//Przycisk resetu
again.addEventListener('click', () => {

  number.style.width = `15rem`;
  message.textContent = `Start guessing...`;
  number.textContent = `?`;
  score.textContent = `20`;
  body.style.backgroundColor = `#222`;
  guessInput.value = ' ';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreNumber = 20;

});