'use strict';

let randomNumber;
let tries = 0;
let scores = null;
let highscores = null;

// Generate random number
const generateRandomNumber = () => {
  randomNumber = Math.floor(Math.random() * 20);
  console.log(randomNumber);
  return randomNumber;
};

generateRandomNumber();

// Query function
const querySelect = query => {
  return document.querySelector(`${query}`);
};

// Change background color
const changeBg = scenario => {
  if ((scenario = 'success')) {
    document.body.style = 'background-color: #60b347;';
  } else if ((scenario = 'failed')) {
    document.body.style = 'background-color: #60b347;';
  } else {
    document.body.style = 'background-color: #222;';
  }
};

// Print message
const printMsg = (identifier, msg) => {
  return (querySelect(`${identifier}`).textContent = msg);
};

//Reload Page
const reloadGame = () => {
  querySelect('.guess').value = '';
  printMsg('.message', 'Start guessing...');
  printMsg('.number', '?');
  changeBg();
  generateRandomNumber();
};

// Calculate scores

// Disable button
const disableBtn = selector => {
  querySelect(`${selector}`).disabled = 'true';
};

// Increase tries
const increaseTries = incNumber => {
  tries += incNumber;
};

// Check random number
const checkRandom = () => {
  const guessValue = Number(querySelect('.guess').value);
  printMsg('.number', guessValue);

  switch ((randomNumber, guessValue)) {
    case randomNumber === guessValue:
    case tries <= 10:
      printMsg('.message', 'You win');
      changeBg('success');
      disableBtn('.check');
      break;
    case randomNumber < guessValue:
    case tries <= 10:
      printMsg('.message', `Not number! Number lower than ${guessValue}`);
      increaseTries(1);
      break;
    case randomNumber > guessValue:
    case tries <= 10:
      printMsg('.message', `Not number! Number higher than ${guessValue}`);
      increaseTries(1);
      break;
    default:
      printMsg('.message', `You lose! Please try again ...`);
      disableBtn('.check');
  }

  querySelect('.guess').value = '';
};

querySelect('.check').addEventListener('click', checkRandom);

querySelect('.again').addEventListener('click', reloadGame);
