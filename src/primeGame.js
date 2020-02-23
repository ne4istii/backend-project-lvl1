import {
  setCorrectAnswerСounter as correctAnswerCounter,
  randomInt, printGreeting, playRound, printCongrats,
} from './index.js';

// Настройки параметров игры
const minInt = 1;
const maxInt = 100;

// Функция проверки числа на простоту
const IsPrime = (num) => {
  let denom = 2;
  while (num % denom !== 0) denom += 1;
  if (denom === num) return 'yes';
  return 'no';
};

const prime = () => {
  let counter = 0;
  const userName = printGreeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
  while (counter < correctAnswerCounter) {
    const questionText = randomInt(minInt, maxInt);
    const correctAnswer = IsPrime(questionText);
    if (playRound(userName, correctAnswer, questionText)) counter += 1;
    else counter = 0;
  }
  printCongrats(userName);
};

export default prime;
