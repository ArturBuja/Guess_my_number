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
// let score = 20;

console.log(String(secretNumber));
let scoreNumber = 20;

check.addEventListener('click', () => {
  const guess = Number(guessInput.value);

/* Kiedy nie ma żadnego inputu*/
  if (!guess) {
    message.textContent = 'No number!';

  //  Kiedy gracz wygrywa
  } else if (guess === secretNumber) {
    message.textContent = `Correct number!`;
    // highscore.textContent = String(scoreNumber);
    body.style.backgroundColor = `#60b347`;
    number.style.width = `30rem`
    number.textContent = String(secretNumber);

  // Kiedy liczba jest za duża
  } else if (guess > secretNumber) {
    if (scoreNumber > 1) {
      message.textContent = `Too high`;
      scoreNumber--;
      score.textContent = String(scoreNumber);
    } else {
      message.textContent = `You lost the game!`;
      score.textContent = '0';
    }


  //  Kiedy liczba jest za mała
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

//Przycisk resetu
again.addEventListener('click', () =>{

  number.style.width = `15rem`;
  message.textContent = `Start guessing...`;
  number.textContent = `?`;
  score.textContent = scoreNumber;
  body.style.backgroundColor = `#222`;
  guessInput.textContent = ``;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreNumber = 20

})